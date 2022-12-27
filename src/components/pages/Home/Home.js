import React from 'react';
import About1 from '../About/About1';
import Banner from '../banner/Banner';
import Features from '../features/Features';
import Service from '../service/Service';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <About1></About1>
            <Service/>
            <Features/>
            
        </div>
    );
};

export default Home;