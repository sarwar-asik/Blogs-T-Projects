import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import ProjectSkelten from "../../shared/Skaleton/ProjectSkelten";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate()

  const [projects, setprojects] = useState([]);

  useEffect(() => {
 
    fetch(`https://sarwar-hossain-server.vercel.app/projectDetail`)
      .then((res) => res.json())
      .then((data) => {
        setprojects(data);
      });
  }, []);
  //   console.log(projects ,"projects.......");

const handleDetail =project=>{
  navigate(`/projectDetails/${project.name}`,{state:project})
  console.log(project.name)
}

  return (
    <div className="px-[25px] my-[30px]">
     <section className="lg:flex sm:block justify-between lg:pr-[10%]  items-center">
     <div className=" my-2 pl-[10px]">
        <h5 className="fonts"> Projects , </h5>
        <h2 className="headings1"> Some of my Projects </h2>
        <p className="para1 mt-3">
          {" "}
          These are my Projects those created recently and updated  <br /> adipisicing elit.
          Molestias eos officia dicta.
        </p>
      </div>
      <button className='bg-[#ED3833] text-white  p-2 text-light'> Portfolio</button>

     </section>

   {
    projects.length?   
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-5">
    {projects?.map((project) => {
      const { name, img, image1, image2, live, source } = project;
      return (
        <div
          className="projectBg "
          style={{
            background: `linear-gradient(180deg, rgba(68, 175, 204, 0.0001) 0%, #44AFE0 100%), url(${image1})`,
          }}
        >
          <div className="absolute bottom-[20px] left-3 ">
            <h5
              className="font-bold text-[24px] text-slate-50 
            "
            >
              {name}
            </h5>
            <button onClick={()=>handleDetail(project)} className=" bg-[#ed3833] px-[15px] py-[5px] my-[5px] text-white rounded-lg  hover:bg-slate-600"> Details</button>
          </div>
          <div className="projectInfo ">
            <a href={live} target="_blank">
              Live
            </a>
            <a href={source} target="_blank">
              Source
            </a>
          </div>
        </div>
      );
    })}
  </section>
  :
  <ProjectSkelten ></ProjectSkelten>
   }
   <footer className="flex text-center gap-3 my-12 justify-center items-center ">
    <button className="h-[38px] w-[38px] text-white font-semibold bg-[#ED3833] ">1</button>
    <button className="h-[38px] hover:bg-[#ED3833] hover:text-white w-[38px] text-slate-700 font-semibold bg-[#afa7a6] ">2</button>
    <button className="h-[38px] hover:bg-[#ED3833] hover:text-white w-[38px] text-slate-700 font-semibold bg-[#afa7a6] ">3</button>
   </footer>
   <ToastContainer></ToastContainer>
    </div>
  );
};

export default Projects;
