import React from 'react'
import { useState,useEffect } from 'react';
import Lottie from 'react-lottie';

import animationDatas from './../Animation - 1734410329680.json';

function Reactloader() {
   
     const [visible, setVisible] = useState(true);

     
       useEffect(() => {
       
             
       
             const timer = setTimeout(() => {
               setVisible(false);
             }, 10000); // Hide the spinner after 2 seconds
         
             return () => clearTimeout(timer); // Clean up the timer on component unmount
           }, []);
       
  return (


    <div
  className={`justify-start h-[5000px] bg-[#8D4374] bg-opacity-100 shadow-bulge top-0 left-0 right-0 bottom-0 absolute ${visible ? '' : 'hidden'}`}
  style={{ zIndex: 9999 }}
>
  {visible && (
    <Lottie
      options={{
        animationData: animationDatas,
        loop: true,
        autoplay: true,
        speed: 3,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={400}
      width={400}
    />
  )}
  
  <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider leading-tight drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <span className="block">HOLISTIC CARE SERVICES</span>
    <span className="block font-about md:text-sm text-xs">Your loved ones deserve the best care—trust us to deliver</span>
  </h1>
</div>
  )
}

export default Reactloader