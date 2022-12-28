import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { Route } from "react-router";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Theme from "./components/shared/theme/Theme";
import Projects from "./components/pages/projects/Projects";
import Questions from "./components/pages/questions/Questions";

function App() {
  return (
    <div className="mx-auto  relative " style={{ "maxWidth":"90%"}}>
      <div className="">
    <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
     <div className="">
     <Questions/>
     <Footer />
     </div>
    </div>
  );
}

export default App;
