import React from "react";

import banner from "../../../assets/Bitmap.png";
import "../../../customcsss/Custom.css";
import bannerPhoto from "../../../assets/professional-removebg-preview.png";
import bannerLeft from "../../../assets/BannerLeft.png";
import bannerRight from "../../../assets/BannerRight.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between bg-slate-800 py-5 px-[30px] w-full z-10 ">
      <div  className="text-white  py-[80px] ">
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
      <div
       
        className="h-[300px] w-[80%] bg-[#F6B443] rounded-[20px] py-[40px] relative  lg:py-[80px] mt-[50px]"
      >
        <div className=" absolute bottom-0 w-full ">
          <img
            className="h-[390px]  w-[60%] mx-auto"
            src={bannerPhoto}
            alt=""
          />
        </div>
        <div className="">
          <p className="py-[50px] w-[130px] rounded-[10px] bg-blue-500 z-20 absolute -left-[40px] border-4 border-slate-400 px-3">
            <h6 className="text-white font-serif text-2xl ">
              {" "}
              Sarwar Hossain{" "}
            </h6>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
