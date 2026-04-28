import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-logo">CATALOG<span>X</span></Link>
        <ul className="nav-pills">
          <li><a href="#Cars">Cars</a></li>
          <li><a href="#Bikes">Bikes</a></li>
          <li><a href="#Phones">Phones</a></li>
          <li><a href="#Computers">Computers</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemname" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}