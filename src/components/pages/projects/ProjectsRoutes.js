import React from 'react';
import Projects from './Projects';

const ProjectsRoutes = () => {
    return (
        <div>
            <div className="bg-slate-800 py-[200px] flex flex-col justify-center text-center">
                <h1 className='text-white text-5xl font-serif '> My All Projects</h1>
                <p className=' text-white text-center my-5 font-thin'>
                    <span>Home </span>
                    <span className='font-bold mx-[2px]'> {">"} </span>
                    <span>Projects</span>
                </p>

            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 text-center mt-[30px] px-8">
                <button className='border hover:text-white hover:bg-[#ED3833] border-[#ED3833] px-[4%] py-[5px]'>
                    All
                </button>
                <button className='border hover:text-white hover:bg-[#ED3833] px-[4%] py-[5px]'>
                    JavaScript
                </button>
                <button className='border hover:text-white hover:bg-[#ED3833]  px-[4%] py-[5px]'>
                    React 
                </button>
                <button className='border hover:text-white hover:bg-[#ED3833]  px-[4%] py-[5px]'>
                    TypeScript
                </button>

            </div>

            <Projects></Projects>
            
        </div>
    );
};

export default ProjectsRoutes;