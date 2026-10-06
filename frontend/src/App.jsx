import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>📷 ACME Rentals</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/">Products</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
