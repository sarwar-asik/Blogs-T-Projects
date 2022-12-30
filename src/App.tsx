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
import ProjectsRoutes from "./components/pages/projects/ProjectsRoutes";
import { ToastContainer } from "react-toastify";
import DetailProjects from "./components/pages/detailProjects/DetailProjects";
import Blogs from "./components/pages/blogs/Blogs";
import Contacts from "./components/pages/contacts/Contacts";

function App() {
  return (
    <div className="mx-auto  relative " style={{ maxWidth: "95%" }}>
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectRoutes" element={<ProjectsRoutes />} />
        <Route path="/projectDetails/:name" element={<DetailProjects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <div className="">
        <Questions />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
