import React from "react";
import "../../../customcsss/Custom.css";
import Projects from "../../pages/projects/Projects";

const ProjectSkelten = ({ projects: [] }) => {
  return (
    <div
      role="status"
      className="rounded  shadow animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      {[1, 2, 3].map((number: any) => {
        return (
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded dark:bg-gray-700 relative projectBg">
            <div className=" flex gap-10">
              <button className="h-10 border-[1px] text-slate-600 font-bold  border-slate-600 bg-gray-200 rounded-md dark:bg-gray-700 w-20 mb-4 shadow animate-pulse">
                Live
              </button>
              <button className="h-10 text-slate-600 font-bold border-[1px] border-slate-600 bg-gray-200 rounded-md dark:bg-gray-700 w-20 mb-4 shadow animate-pulse">
                Source
              </button>
            </div>

            <h3 className="w-[90%] mx-auto h-[5px] shadow animate-pulse bg-slate-500 mt-3">---</h3>
            <h3 className="w-[70%] mx-auto h-[5px] shadow animate-pulse bg-slate-500 mt-3">--</h3>
            <h3 className="w-[50%] mx-auto h-[5px] shadow animate-pulse bg-slate-500 mt-3">-</h3>

            <h1 className=" absolute left-5 bottom-5 text-slate-600 font-bold">
              Content Name
            </h1>
          </div>
        );
      })}

 
    </div>
  );
};

export default ProjectSkelten;
