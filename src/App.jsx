import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = true;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />}>
        <Route path=":category" element={<ProductList />} />
      </Route>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
    </Routes>
  );
}

export default App;
