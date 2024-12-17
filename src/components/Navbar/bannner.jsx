import React, { useEffect,useState } from 'react';
import banner1 from '../../assets/bannerimage1.jpeg';
import { Link } from 'react-router-dom';
import banner2 from '../../assets/bannerimage2.jpeg';
import banner3 from '../../assets/bannerimage3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cqc from './cqc';
import axios from 'axios';

function Banner({imagesArray,textArray}) {
 

  

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  
  return (
    <div className='min-h-[550px]  sm:pr-40 flex justify-center items-center py-12 mt-10 sm:py-0 sm:mt-[100px] sm:px-30' >
      <div className='container mx-auto px-4'>
        <div className=' grid  sm:grid-cols-2 gap-6 items-center'>
          {/* Image section */}
          <div data-aos='flip-left' className='flex justify-center'>
         
          
           
          </div>
          <div className='sm:hidden  sm:h-[500px] md:h-[300px]   h-[300px]  '>

          <img
              src={imagesArray[0]}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[200px]  md:w-[50px]  h-[200px]  md:hidden 
             drop-shadow-md object-cover absolute sm:mt-[200px] mt-[60px] md:mt-0    'data-aos='flip-right'
            />
          <img
              src={imagesArray[1]}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[200px] md:w-[200px] h-[200px] drop-shadow-md object-cover absolute sm:ml-[200px] z-20  ml-[120px] border-solid border-[#8D4374] border-[10px]' data-aos="zoom-in-up"
            />
         
            
          </div>
          <img
              src={imagesArray[0]}
              alt='Banner'
              className='bg-white  sm:w-[300px] md:hidden xl:flex  w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute sm:mt-[10%]    sm:block hidden 'data-aos='flip-left'
            />
          <img
              src={imagesArray[1]}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute sm:ml-[200px] z-20 border-solid border-[#a43579] border-[10px] md:w-[200px] xl:w-[300px] sm:block hidden ' data-aos="zoom-in-up"
            />
          <img
              src={imagesArray[2]}
              alt='Banner'
              className='bg-white sm:w-[300px] xl:w-[300px]  w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute xl:ml-[400px] mb-[500px] sm:mt-[10%]   z-10 hidden sm:block md:w-[200px]' data-aos='flip-left'
            />
            
          {/* Text detail section */}
          <div className='text-center   sm:text-left sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[500px] sm:ml-40' data-aos="fade-left">
  <h1 className='text-3xl font-banner mb-4 text-primary mx-2 '>
  <p dangerouslySetInnerHTML={{ __html: textArray[0] }}></p>
  </h1>
  <p className='text-lg mb-6 mx-5'>
  <p dangerouslySetInnerHTML={{ __html: textArray[1] }}></p>
    <br />
    <br />
    <div className='flex justify-center sm:justify-center md:justify-start'>
      <Link to='/about'>
        <button className='bg-[#a43579] text-white py-2 px-20 rounded hover:bg-primary-dark transition duration-300'>
          Learn More
        </button>
      </Link>
    </div>
  </p>
</div>

        </div>
           
       
      </div>
    </div>
  );
}

export default Banner;
