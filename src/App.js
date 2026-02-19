import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SellerLogin from "./components/SellerLogin";


function App() {
  return (
    <>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller" element={<SellerLogin />} />
      </Routes>
    </>
  );
}

export default App;
