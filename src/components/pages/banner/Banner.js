import React from "react";
import banner from "../../../assets/Bitmap.png";
import "../../../customcsss/Custom.css";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between  bg-slate-800 py-5 px-[30px] w-full z-0">
      <div className="text-white  py-[80px] ">
        <h5 className="lg:text-[24px]"> Personal Portfolio</h5>
        <h1 className="text-[34px] flex flex-col font-sans font-bold">
          <span> FRONTEND</span>
          <span> WEB DEVELOPER</span>
        </h1>
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
          Doloribus est, quia eos voluptas .
        </p>
        <p className="flex gap-3 my-[8px]">
          <button className="btn-1">About</button>

          <button className="btn-2">Learn More</button>
        </p>
      </div>
      <div className=" lg:py-[80px] mr-0">
        <figure>
          <img className=" h-[400px]" src={banner} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
