import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { Route } from "react-router";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <div className="w-[90%] mx-auto relative">
    <div className="">
    <Navbar />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     <div className="">
     <Footer />
     </div>
    </div>
  );
}

export default App;
