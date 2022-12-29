import React from "react";
import "../../../customcsss/Custom.css";

const ProjectSkelten = () => {
  return (
    <div
      role="status"
      className="rounded  shadow animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {[...Array(3).keys()].map((index, number) => {
        return (
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded dark:bg-gray-700 relative projectBg">
            <div className=" flex gap-10">
              <button className="h-10 border-[1px] text-slate-600 font-bold  border-slate-600 bg-gray-200 rounded-md dark:bg-gray-700 w-20 mb-4">
                Live{" "}
              </button>
              <button className="h-10 text-slate-600 font-bold border-[1px] border-slate-600 bg-gray-200 rounded-md dark:bg-gray-700 w-20 mb-4">
                Source{" "}
              </button>
            </div>
            <h1 className=" absolute left-5 bottom-5 text-slate-600 font-bold">
              {" "}
              Content Name
            </h1>
          </div>
        );
      })}

      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div> */}
    </div>
  );
};

export default ProjectSkelten;
