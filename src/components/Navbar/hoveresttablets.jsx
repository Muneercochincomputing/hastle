import React, { useState, useEffect } from 'react';
import demo from '../../assets/IMG_6146.jpg';

const AnimatedContainertab = () => {
  const [style, setStyle] = useState({
    width: '90%',
    height: '800px',
    borderRadius: '0%',
    transform: 'translateY(0px)', // Initial position
    marginBottom: '0px', // Initial margin-bottom
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [textClass, setTextClass] = useState('opacity-100');

  const handleScroll = () => {
    const maxScroll = 1000; // Adjust this value as needed
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);

    // Calculate width, height, transform, and margin-bottom based on scroll progress
    const width = `${100 - progress * 100}%`; // Reduces width to 0%
    const height = `${800 - progress * 400}px`; // Decrease height at a slower rate (reduced speed)
    const transform = `translateY(${progress * 200}px)`; // Move container down at a slower speed
    const marginBottom = `${progress * 200}px`; // Reduce margin-bottom change for smoother scrolling

    // Set styles based on progress
    setStyle(prevStyle => ({
      ...prevStyle,
      width,
      height,
      transform,
      marginBottom,
      borderRadius: progress > 0 ? '50%' : '0%',
    }));

    setVideoClass(progress > 0 ? 'rounded-full' : 'rounded-none');
    setTextClass(progress > 0 ? 'opacity-0' : 'opacity-100');
  };

  useEffect(() => {
    handleScroll(); // Initial scroll handling

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-auto hidden justify-center items-center bg-gray-200 overflow-hidden  md:flex lg:hidden"
      style={{
        transition: 'transform 0.9s ease-out, margin-bottom 0.9s ease-out', // Smoother and slower transition for container movement and margin
        transform: style.transform, // Apply transform to move the main container
        marginBottom: style.marginBottom, // Apply margin-bottom
      }}
    >
      <div
        className="flex justify-center items-center bg-white"
        style={{
          transition: 'width 0.9s ease-out, height 0.9s ease-out, border-radius 0.9s ease-out',
          ...style,
        }}
      >
        <img
          className={`object-fill w-full h-full ${videoClass} transition-all duration-[0.9s] ease-out`}
          src={demo} type="video/mp4" 
        />
          
        
        <div className='absolute left-0 top-[400px] ml-4'>
  <div
    className={`text-white font-banner text-[28px] text-left sm:text-[24px] md:text-[40px] font-bold transition-opacity duration-[0.9s] ease-out ${textClass}  `}
  >
       Helping you & your loved ones to<span> age gracefully & comfortably in</span> <br />
  </div>
  <button className={`${textClass} group mt-4 px-6 py-3 w-[180px] md:w-[250px] lg:w-[200px] border border-white bg-purple-500 text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-md`}>
    <span className="font-semibold text-[14px] md:text-[15px] lg:text-[16px]">
      Schedule <br/> Free Consultation
    </span>
  </button>
</div>

      </div>
    </div>
  );
};

export default AnimatedContainertab;
