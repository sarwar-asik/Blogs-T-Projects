import React from 'react';
import About1 from '../About/About1';
import Banner from '../banner/Banner';
import Features from '../features/Features';
import Projects from '../projects/Projects';
import Questions from '../questions/Questions';
import Service from '../service/Service';

const Home = () => {
    return (
        <div className=''>
           <div className=" w-full ">
           <Banner/>
          
           </div>
            <About1></About1>
            <Service/>
            <Projects></Projects>
            <Features/>
         
        
            
        </div>
    );
};

export default Home;