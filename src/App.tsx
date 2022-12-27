import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { Route } from "react-router";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Theme from "./components/shared/theme/Theme";

function App() {
  return (
    <div className=" mx-auto relative" style={{"maxWidth":'90%'}}>
      
    <div className=" ">
      <Theme/>
    </div>
    <Navbar />
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
