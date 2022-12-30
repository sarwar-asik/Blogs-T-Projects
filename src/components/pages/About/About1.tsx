import React from "react";
import banner1 from "../../../assets/Bitmap2.png";
import "../../../customcsss/Custom.css";
import profile from "../../../assets/professional-removebg-preview.png";

const About1 = () => {
  return (
    <div
      
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-[34px] py-[15px] "
      
    >
      <section className=" relative">
        <img src={banner1} alt="" />
        <div className="h-[110px] bg-[#F6B443] w-[110px] rounded absolute bottom-[4rem] left-[14rem] z-10">
          <img className="h-[100%] w-[95%] mx-auto " src={profile} alt="" />
        </div>
      </section>
      <section className="relative lg:px-[70px] px-[20px]">
        <h6 className="fonts"> About</h6>
        <p className="headings1"> Passion,</p>
        <p className="headings1 mt-0"> Heart & Soul </p>
        <p className="para1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
          aliquam. Lorem ipsum dolor sit amet.
        </p>
        <button className="btn-1"> About</button>
      </section>
    </div>
  );
};

export default About1;
