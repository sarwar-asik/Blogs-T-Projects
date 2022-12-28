import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: `https://sarwar-hossain-server.vercel.app/projectDetail`,
    // }).then((data) => {
    //   setprojects(data.data);
    // });
    fetch(`https://sarwar-hossain-server.vercel.app/projectDetail`)
      .then((res) => res.json())
      .then((data) => {
        setprojects(data);
      });
  }, []);
  // console.log(projects ,"projects.......");

  return (
    <div className="px-[25px] my-[30px]">
      <div className=" my-2 pl-[10px]">
        <h5 className="fonts"> Projects , </h5>
        <h2 className="headings1"> Some of my Projects </h2>
        <p className="para1 mt-3">
          {" "}
          Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
          Molestias eos officia dicta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px]">
        {projects?.map((project) => {
          const { name, img, image1, live, source } = project;
          return (
            <div
              className=" relative"
              style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-[20px] left-3 ">
                <h5
                  className="font-bold text-[24px] text-slate-50 
                "
                >
                  {name ? name : "Simple Project"}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
