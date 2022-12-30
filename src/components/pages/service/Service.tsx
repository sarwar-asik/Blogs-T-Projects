import React from "react";
import service from "../../../assets/service.png";
import servicebgs from "../../../assets/servicebg.png";

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-[34px] py-[15px] lg:px-[70px] px-[25px]">
      <div className="">
        <h6 className="fonts"> Service </h6>
        <h2 className="headings1">Responsived & </h2>
        <h2 className="headings1"> Sequired Website</h2>

        <p className="para1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aliquid{" "}
          <br />
          ratione exercitationem consequuntur?
        </p>

        <div className="">
          <p className="flex gap-2  text-sm text-slate-400">
            <input
              type="checkbox"
              
              className="rounded    bg-info text-white"
            />
            <span> Responsive website with uniq design and develop.</span>
          </p>
          <p className="flex gap-2  text-sm text-slate-400">
            <input
              type="checkbox"
              checked={true}
              className="rounded checkbox-accent p-2 bg-info text-white"
            />
            <span> Used React components in website</span>
          </p>
          <p className="flex gap-2  text-sm text-slate-400">
            <input
              type="checkbox"
              checked={true}
              className="rounded  p-2 bg-info text-white"
            />
            <span> SEO optimization optimization.</span>
          </p>
          <p className="flex gap-2 text-sm text-slate-400">
            <input
              type="checkbox"
              checked={true}
              className="rounded  p-2 bg-info text-white"
            />
            <span>Sequired private routes </span>
          </p>
        </div>
      </div>
      <figure>
        <img
          src={service}
          alt=""
          style={{
            backgroundImage: `url(${servicebgs})`,
          }}
        />
      </figure>
    </div>
  );
};

export default Service;
