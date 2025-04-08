import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Basic/Header";
import Home from './Basic/Home'
import About from './Basic/About';
import Contacts from './Basic/Contacts';
import Products from './Basic/Products';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="*" element={<div>page not found 404</div>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App
