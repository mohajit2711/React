import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Terms} from './terms.js';
import { Admin } from './admin.js';
import { Dashboard } from './dashboard.js';
import { SnackbarProvider } from 'notistack';
import { PrivateRoute } from "./PrivateRoute.js";


function App() {
  
    return (
      <div className="App">
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Terms />} />
            </Routes>
            <Routes>
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </div>
    );
}

export default App;