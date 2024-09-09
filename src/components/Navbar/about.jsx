import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import about from '../../assets/aboutimg.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Product() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  const productData = [
    {
      id: 1,
     aosdelay: "200"
    },
  ];

  return (
    <div>
      <div className='container'>
        {/* header section */}
        <div className='text-center max-w-[400px] mx-auto'>
          <p className='text-primary text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-20 '>
            About Us
          </p>
        </div>

        <p className='text-gray-400  text-[16px] sm:text-[20px] w-full p-2 '>
          At Holistic Care Services, we are dedicated to providing high-quality, personalized home care for the elderly in Liverpool. Our team of experienced caregivers is committed to ensuring the well-being and comfort of your loved ones.
        </p>

        {/* body section */}
        <div className='w-full text-center mb-10'>
          <Link to='/hastle/about'>
          <button className="text-red px-30 mx-auto sm:rounded-xl rounded-2xl mb-10 hover:before:bg-red border-red-500 relative h-[30px] overflow-hidden border border-[#800080] bg-white px-3 text-[#800080] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#800080] before:transition-all before:duration-500 hover:text-white hover:shadow-[#800080] hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-[20px] ">Learn More</span>
          </button>
          </Link>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center gap-5'>
            {/* card section */}
            {productData.map((data) => (
              <div data-aos='fade-up' data-aos-delay={data.aosdelay} key={data.id}>
                <div className='p-2'>
                  <img src={about} className='shadow-bulge  sm:h-[600px] sm:w-[1200px] sm:object-cover object-contain rounded-md' alt={data.title} />
                  <div>
                    <h1 className='font-bold text-[18px] mt-4'></h1>
                    <p className='text-sm text-grey-600'></p>
                    <div className='flex items-center gap-1'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
