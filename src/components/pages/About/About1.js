import React from "react";
import banner1 from "../../../assets/Bitmap2.png";
import "../../../customcsss/Custom.css";

const About1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-[34px] py-[15px] ">
      <img src={banner1} alt="" />
      <div className="relative lg:px-[70px] px-[20px]">
        <h6 className="fonts"> About</h6>
        <p className="headings1"> Passion,</p>
        <p className="headings1 mt-0"> Heart & Soul </p>
        <p className="para1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, aliquam. Lorem ipsum dolor sit amet.</p>
        <button className="btn-1"> About</button>
      </div>
    </div>
  );
};

export default About1;
