import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound.jsx";
import Registeration from "./components/Registeration/Registeration";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
