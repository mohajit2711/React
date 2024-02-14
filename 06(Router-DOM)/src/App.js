import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import './App.css';
import {Home} from "./pages/home"
import {Contact} from "./pages/contact"
import {Menu} from "./pages/menu"
import { Navbar } from './Navbar';
function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
  </div>);
}

export default App;
