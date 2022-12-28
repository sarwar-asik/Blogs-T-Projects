import React from "react";
import "../../../customcsss/Custom.css";
import leftBG from "../../../assets/PolygonLeft.png";
import rightbg from "../../../assets/PolygonRight.png";

const Questions = () => {
  return (
    <div className="bg-info relative  py-[120px]">
      <img className="absolute top-0 h-full" src={leftBG} alt="" />
      <div className=" px-3 flex flex-col justify-center gap-2  items-center ">
        <h2 className=" text-xl font-bold text-white ">
          Contact If You Have Any Projects ? 
        </h2>
        <p className="text-sm ml-[65px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
          <br /> Ipsum dolor sit amet consectetur
        </p>
        <p className=" flex gap-3 my-[8px] z-10">
          <button className="btn-1">Connect</button>
          <button className="btn-2">About</button>
        </p>
      </div>

      <img
        className="absolute  right-0 top-0 h-full z-20"
        src={rightbg}
        alt=""
      />
    </div>
  );
};

export default Questions;
