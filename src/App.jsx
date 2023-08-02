import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";


const App = () => {
  const user = false;
  return (
 
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
   
      
      <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />      
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/product/:id" element={<Product />} />

    </Routes>
  </Router>
  )
};

export default App;