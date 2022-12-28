import React from 'react';
import Projects from './Projects';

const ProjectsRoutes = () => {
    return (
        <div>
            <div className="bg-slate-800 py-[200px] text-center">
                <h1 className='text-white text-5xl font-serif '> My All Projects</h1>


            </div>

            <Projects></Projects>
            
        </div>
    );
};

export default ProjectsRoutes;