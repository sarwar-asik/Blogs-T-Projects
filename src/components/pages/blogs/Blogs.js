import React from "react";
import "../../../customcsss/Custom.css";

const Blogs = () => {
  return (
    <div>
      <header className="py-[150px] bg-slate-800 flex flex-col justify-center items-center gap-2 text-white">
        <h1 className=" text-4xl font-serif"> My Blogs </h1>
        <h3 className=" font-thin text-sm ">
          <span> Home </span>
          <span> {">"} </span>
          <span> Blogs</span>
        </h3>
      </header>
      <section className="py-10 ">
        <progress
          className="progress progress-info w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-info w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-info w-56"
          value="50"
          max="100"
        ></progress>
        <progress
          className="progress progress-info w-56"
          value="60"
          max="100"
        ></progress>
        <progress
          className="progress progress-info w-56"
          value="80"
          max="100"
        ></progress>
        <progress className="progress progress-info w-56"></progress>
      </section>
    </div>
  );
};

export default Blogs;
