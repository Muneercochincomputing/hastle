import React, { useEffect } from 'react';
import banner1 from '../../assets/bannerimage1.jpeg';
import { Link } from 'react-router-dom';
import banner2 from '../../assets/bannerimage2.jpeg';
import banner3 from '../../assets/bannerimage3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cqc from './cqc';

function Banner() {
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
          <div className='sm:hidden  sm:h-[500px] md:h-[200px]   h-[300px]  '>

          <img
              src={banner3}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[200px]  md:w-[50px]  md:h-[50px]  md:hidden h-[1
              00px] drop-shadow-md object-cover absolute sm:mt-[200px] mt-[150px] md:mt-0    'data-aos='flip-right'
            />
          <img
              src={banner2}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[200px] md:w-[200px] h-[200px] drop-shadow-md object-cover absolute sm:ml-[200px] z-20  ml-[120px] border-solid border-[#8D4374] border-[10px]' data-aos="zoom-in-up"
            />
         
            
          </div>
          <img
              src={banner1}
              alt='Banner'
              className='bg-white  sm:w-[300px] md:hidden xl:flex  w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute sm:mt-[10%]    sm:block hidden 'data-aos='flip-left'
            />
          <img
              src={banner2}
              alt='Banner'
              className='bg-white sm:w-[300px] w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute sm:ml-[200px] z-20 border-solid border-[#a43579] border-[10px] md:w-[200px] xl:w-[300px] sm:block hidden ' data-aos="zoom-in-up"
            />
          <img
              src={banner3}
              alt='Banner'
              className='bg-white sm:w-[300px] xl:w-[300px]  w-[100px] sm:h-[300px] drop-shadow-md object-cover absolute xl:ml-[400px] mb-[500px] sm:mt-[10%]   z-10 hidden sm:block md:w-[200px]' data-aos='flip-left'
            />
            
          {/* Text detail section */}
          <div className='text-center sm:text-left sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[500px] sm:ml-40' data-aos="fade-left">
  <h1 className='text-3xl font-banner mb-4 text-primary'>
    Your loved ones deserve the best in their golden years—a place where care feels like home
  </h1>
  <p className='text-lg mb-6'>
    We make your home a warm, comforting environment where your loved ones can enjoy their golden years with dignity and respect.
    Our dedicated team offer round the clock care, ensuring all clients receive the attention and support they need. 
    With a range of activities to keep the mind and body active, along with delicious and nutritious meals, we strive to create a 
    home-like atmosphere that foster not only companionship and joy but also comfort, care, and community. Every day is meaningful, 
    whether it’s for short-term respite care or ongoing support.
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
