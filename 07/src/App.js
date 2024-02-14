import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import {Home} from "./pages/home"
import {Contact} from "./pages/contact"
import {Profile} from "./pages/profile"
import { Navbar } from './Navbar';
import { useState,createContext } from 'react';

export const AppContext = createContext();
function App() {
  const [username,setUsername] = useState("MohajitTech");

  return (
  <div className="App">
    <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  </div>);
}

export default App;
