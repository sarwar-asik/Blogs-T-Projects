import React from 'react';
import { useLocation } from 'react-router-dom';
import "../../../customcsss/Custom.css";
import { FaGithub} from "react-icons/fa";

const DetailProjects = () => {
    const  {state} = useLocation()
    const {name , image1,image2 , image3 ,tech ,details,time , live ,source } = state
    // console.log(state);
    return (
        <div className=''>
            <header className='bg-slate-800 py-[100px] flex flex-col justify-center items-center text-white  '>
                <h1 className='text-[36px] font-serif'>{name} Project </h1>
                <h3 className=' font-thin text-sm'> 
                    <span > Home </span>
                    <span > {'>'} </span>
                    <span > Projects </span>
                    <span > {'>'} </span>
                    <span > {name} </span>
                </h3>

            </header>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 my-[30px] ">
             
           <section className='bg-slate-100 '>
                <img className='h-[312px] w-[450px] p-2 shadow-xl' src={image1} alt="" />
                <img className='h-[312px] w-[450px] p-2 shadow-xl' src={image2} alt="" />
                <img className='h-[312px] w-[450px] p-2 shadow-xl' src={image3} alt="" />
            </section>
            <section>
                <h1 className='font-serif text-[#f07867] text-[24px]'> Project Details , </h1>
                <details className='text-sm para1 '>
                    The Project name is {name} . I created it by React . I implement my MERN Skills in {name} project .
                </details>
                <h2 className='fonts  my-3  '> Created Time :::</h2>
                <p className='text-sm'> {time }</p>
                <div className="">
                    <p className='fonts my-3'> Used Technology ::: </p>
                    <p className=" flex gap-5">
                        {tech?.map(tec=> 
                        <img className='h-[54px] rounded-[50%] p-1 w-[54px] bg-slate-800' src={tec} alt='technology'></img>
                            )}
                    </p>

                </div>
                <p className='mt-8 flex gap-5'>
                    <a className='btn-1' src={live} target={"_blank"}>Live Project</a>
                    
                    <a className='btn-2 flex  justify-center items-center gap-2' src={live} target={"_blank"}> <FaGithub/> <span>Source</span> </a>
                </p>

            </section>
           </div>
            
        </div>
    );
};

export default DetailProjects;