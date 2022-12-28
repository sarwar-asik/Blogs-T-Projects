import React from "react";
import "../../../customcsss/Custom.css";
import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";

const Features = () => {
  const features = [
    {
      no: 1,
      name: "Web Design",
      img: feature1,
      detail: "I also service dolor sit, amet consectetur adipisicing.",
      color: "aqua",
    },
    {
      no: 2,
      name: "Web Develop",
      img: feature2,
      detail: "I also service dolor sit, amet consectetur adipisicing.",
      color: "#ED3833",
    },
    {
      no: 3,
      name: "Sell Web site",
      img: feature3,
      detail: "I also service dolor sit, amet consectetur adipisicing.",
      color: "#F6B443",
    },
  ];
  return (
    <div className="my-5">
      <header className="text-center">
        <h6 className="fonts"> Features</h6>
        <h4 className="headings1">Awesome </h4>
        <h4 className="headings1">Client Services </h4>
        <p className="para1">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a iusto
          hic .
        </p>
        <p>And I also service dolor sit, amet consectetur adipisicing.</p>
      </header>
      <main className="my-4 grid  grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3 mt-4 mb-5">
        {features.map((feature) => {
          const { name, img, detail, color } = feature;

          return (
            <div class="card text-start  p-2 h-[230px]">
              <figures
                className={` h-[50px] w-[50px]  text-center p-2 rounded-[50%] `}
                style={{ backgroundColor: `${color}` }}
              >
                <img class="h-[30px] w-[30px]" src={img} alt="Title" />
              </figures>
              <h1 className="font-semibold">{name}</h1>
              <p className="para1">
                {detail} <br /> Lorem ipsum dolor sit amet consectetur . <br />
                Natus a iusto hic dolor sit.{" "}
              </p>
              <h6 className="text-slate-600"> See more ...</h6>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Features;
