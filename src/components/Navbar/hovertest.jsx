import React, { useState, useEffect } from 'react';
import demo from '../../assets/IMG_6146.jpg';
import whyimage1 from '../../assets/charity.png';
import whyimage2 from '../../assets/family.png';
import whyimage3 from '../../assets/friends.png';

const AnimatedContainer = ({ onScrollToSubscription }) => {

  const ScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });




  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}




  const [style, setStyle] = useState({
    width: '100%',
    height: '1200px',
    borderRadius: '0%',
    top: '0px',
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [padding, setPadding] = useState('px-[40px] pb-[400px]');
  const [textClass, setTextClass] = useState('opacity-100');

  const handleScroll = () => {
    const maxScroll = 1000;
    const scrollY = window.scrollY;

    const progress = Math.min(scrollY / maxScroll, 1);

    const width = `${100 - progress * 100}vw`;
    const height = `${1700 - progress * 1700}px`;
    const borderRadius = progress > 0 ? '50%' : '0%';

    setVideoClass(progress > 0 ? 'rounded-full' : 'rounded-none');
    setPadding(progress > 0 ? 'p-0' : 'px-[50px] md:pb-[700px]');
    setTextClass(progress > 0 ? 'opacity-0' : 'opacity-100');

    const top = `${scrollY}px`;

    setStyle({
      width,
      height,
      borderRadius,
      top,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hidden lg:flex md:bottom-[1200px] sm:hidden   '>
      <div className="lg:flex   w-full h-[1400px] justify-center items-center bg-gray-200 overflow-auto">
        <div
          style={{
            transition: 'width 1s ease-in-out, height 1s ease-in-out, border-radius 1s ease-in-out, top 1s ease-in-out',
            position: 'absolute',
            zIndex: '10',
            left: '50%',
            top: style.top,
            transform: 'translate(-50%, 0)',
            ...style,
          }}
          className="bg-white w-full lg:w-[500px] h-[100px]"
        >
          <div>
          <img
          src={demo}
            className={`object-cover absolute z-20 w-full h-full md:[1400px] ${videoClass} transition-all duration-500 ${padding}`}
           
          />
          <div className={`absolute inset-0 bg-black opacity-50 z-30 ${videoClass} ${padding}`} />
          </div>
         
           
          
          <div className='absolute z-30   h-screen w-full mt-[12%] flex flex-col  ' >
            <div className={`text-white text-[36px] md:text-[48px] lg:text-[52px] ml-[50px] sm:ml-[100px] md:ml-[30px] lg:ml-[60px] mt-[100px] font-banner transition-opacity duration-500 ${textClass}`}>
            Helping you & your loved ones to<br/> age gracefully & comfortably in<br />
            your home
            </div>

             <div className={`text-white text-[36px] md:text-[48px] lg:text-[20px] ml-[50px] sm:ml-[100px] md:ml-[30px] lg:ml-[60px] mt-[10px]  transition-opacity duration-500 ${textClass}`}>
            Have compassionate and reliable care that respects<br/> your independence and enhances your quality of life <br />
            
            </div>
     
            <button  onClick={onScrollToSubscription} className={`group relative min-h-[30px] p-6 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#a43579] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-purple-500 hover:bg-white hover:before:h-full hover:after:h-full rounded-xl ml-[2px] md:ml-[20px] lg:ml-[58px] mt-4 px-20 ${textClass}`}>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]  ">Book your  Free Consultation</span>
            </button>
          </div>
          <div className={`md:w-full mx-10 md:h-[400px]  mt-[800px] hidden    ${textClass}`}>
             <div className='sm:mt-[300px] xl:mt-10 '>
        
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5 '>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage1} className='w-40 h-40 mb-4'/>
             <p className='text-[#8D4374] '>We are different</p> 
              <p className='text-sm font-normal p-4 '>
              Our award-winning team is not just about providing care; it's about creating a family atmosphere. Our care professionals are carefully chosen for their warmth, compassion, and dedication. They will become a trusted friend, someone to chat with, share stories with, and even help with those little things that make a big difference
              </p>
            </div>
            <div className='flex flex-col items-center text-center  sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage2} className='w-40 h-40 mb-4'/>
              <p className='text-[#8D4374]'>Warm Hands, Kind Hearts</p>
              <p className='text-sm font-normal p-4'>
              We listen to your needs and create a care plan that is unique to you, adapting as your needs change. They will treat you with dignity and become trusted companions, ready to help with daily tasks or simply share a conversation
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage3} className='w-40 h-40 mb-4'/>
             <p className='text-[#8D4374]'> We are Always Learning</p>
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
