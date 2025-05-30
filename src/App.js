import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Books from "./pages/Books"; 
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


function App() {
  return (<><div className="min-h-screen bg-gray-100 font-sans">
             <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     
    </div>
     <Footer /></>
    
  );
}

export default App;