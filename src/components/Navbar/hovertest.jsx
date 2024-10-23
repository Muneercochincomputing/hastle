import React, { useState, useEffect } from 'react';
import demo from '../../assets/newhero.jpg';
import whyimage1 from '../../assets/charity.png';
import whyimage2 from '../../assets/family.png';
import whyimage3 from '../../assets/friends.png';
import Product from './about';

const AnimatedContainer = ({ onScrollToSubscription }) => {
  const [style, setStyle] = useState({
    width: '100vw',  // Set the image to cover the full width
     // Set the height to a fixed value
    borderRadius: '0%', // Keep the image as a square/rectangle
    top: '0px', // Fixed top position
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [padding, setPadding] = useState('');
  const [textClass, setTextClass] = useState('opacity-100');

  const handleScroll = () => {
    // Commenting out dynamic logic to stop animation on scroll
    // const maxScroll = 1000;
    // const scrollY = window.scrollY;
    // const progress = Math.min(scrollY / maxScroll, 1);

    // Disable dynamic changes
    // const width = `${100 - progress * 100}vw`;
    // const height = `${1300 - progress * 1300}px`;
    // const borderRadius = progress > 0 ? '50%' : '0%';

    // setVideoClass(progress > 0 ? 'rounded-full' : 'rounded-none');
    // setPadding(progress > 0 ? 'p-0' : 'px-[50px] md:pb-[200px]');
    // setTextClass(progress > 0 ? 'opacity-0' : 'opacity-100');

    // const top = `${scrollY}px`;
    // setStyle({ width, height, borderRadius, top });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hidden lg:flex md:bottom-[900px] sm:hidden  '>
      <div className="lg:flex w-full  justify-center items-center  overflow-hidden">
        <div 
          style={{
            position: 'absolute',
            zIndex: '10',
            
            top: style.top,
            ...style,
          }}
          className="bg-white w-full lg:w-[2px] h-screen"
        >
          <img src={demo} className={`absolute inset-0 w-[100vw] z-30 h-full`} />

          <div>
            <div className={`absolute inset-0 bg-black opacity-5 z-30`} />
          </div>

          <div className='absolute z-30 h-screen w-full justify-center flex flex-col'>
            <div className={`group relative min-h-[30px] font-banner lg:text-[40px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-full overflow-hidden text-white transition-all rounded-xl ml-[2px] md:ml-[20px] mt-10 px-20 ${textClass}`}>
              Helping you & your loved ones to<br/> age gracefully & comfortably in<br />
              your home
            </div>

            <div className={`group relative min-h-[30px] font-banner lg:text-[20px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-full overflow-hidden text-white transition-all rounded-xl ml-[2px] md:ml-[20px] mt-10 px-20 ${textClass}`}>
              Have compassionate and reliable care that respects<br/> your independence and enhances your quality of life
            </div>

            <button onClick={onScrollToSubscription} className={`group relative min-h-[30px] p-6 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#a43579] text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-xl ml-[2px] md:ml-[20px] lg:ml-[108px] mt-10 px-20 ${textClass}`}>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
                Book your Free Consultation
              </span>
            </button>
            <div className='w-full h-[400px]  group absolute min-h-[30px] z-40  sm:w-[150px] md:w-[200px] lg:w-[85%] overflow-hidden border border-white bg-white text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-xl ml-[2px] md:ml-[20px] lg:ml-[108px] mt-[900px] '>
            <Product pageIdentifier="Homepage"/>
            </div>

          </div>
        
          <div className={`md:w-full mx-10 md:h-[400px] mt-[800px] hidden ${textClass}`}>
            <div className='sm:mt-[300px] xl:mt-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
                <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
                  <img src={whyimage1} className='w-40 h-40 mb-4' />
                  <p className='text-[#8D4374]'>We are different</p>
                  <p className='text-sm font-normal p-4'>
                    Our award-winning team is not just about providing care; it's about creating a family atmosphere.
                  </p>
                </div>
                <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
                  <img src={whyimage2} className='w-40 h-40 mb-4' />
                  <p className='text-[#8D4374]'>Warm Hands, Kind Hearts</p>
                  <p className='text-sm font-normal p-4'>
                    We listen to your needs and create a care plan that is unique to you, adapting as your needs change.
                  </p>
                </div>
                <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
                  <img src={whyimage3} className='w-40 h-40 mb-4' />
                  <p className='text-[#8D4374]'>We are Always Learning</p>
                  <p className='text-sm font-normal p-4'>
                    We constantly improve our services and knowledge to provide the best possible care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedContainer;
