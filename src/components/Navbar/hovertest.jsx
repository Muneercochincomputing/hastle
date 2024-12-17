import React, { useState, useEffect,useRef } from 'react';
import demo from '../../assets/newhero.jpg';
import whyimage1 from '../../assets/charity.png';
import whyimage2 from '../../assets/family.png';
import whyimage3 from '../../assets/friends.png';
import Product from './about';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../../Animation - 1734195480142.json'; // Replace with your Lottie JSON file



const AnimatedContainer = ({ onScrollToSubscription, imagesArray, textArray }) => {
  const [style, setStyle] = useState({
    width: '100vw',
    borderRadius: '0%',
    top: '0px',
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [padding, setPadding] = useState('');
  const [textClass, setTextClass] = useState('opacity-100');
  
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Loader state


  const lottieRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate a loading time
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    // Commenting out dynamic logic to stop animation on scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  
    useEffect(() => {

      if (lottieRef.current) {
        const paths = lottieRef.current.renderer.elements;
        paths.forEach(path => {
          path.style.fill = "#8D4374"; // Change color dynamically
        });
      }

      const timer = setTimeout(() => {
        setVisible(false);
      }, 8000); // Hide the spinner after 2 seconds
  
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex md:bottom-[900px] sm:hidden">
      <div className="lg:flex w-full justify-center items-center overflow-hidden">
        <div
          style={{
            position: 'absolute',
            zIndex: '10',
            top: style.top,
            ...style,
          }}
          className="bg-[#f0edef] w-full lg:w-[2px] h-screen "
        >
  



          <img src={imagesArray[0]} className={`absolute inset-0 w-[100vw] z-30 h-full`} />
          <div>
    

            <div className={`absolute inset-0 bg-black opacity-5 z-30`} />
          </div>
          <div className="absolute z-30 h-screen w-full justify-center flex flex-col">
            <div
              className={`group relative min-h-[30px] font-banner lg:text-[40px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-full overflow-hidden text-white transition-all rounded-xl ml-[2px] md:ml-[20px] mt-10 px-20 ${textClass} whitespace-normal break-words`}
            >
              <p dangerouslySetInnerHTML={{ __html: textArray[0] }}></p>
            </div>

            <div
              className={`group relative min-h-[30px] font-banner lg:text-[20px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-full overflow-hidden text-white transition-all rounded-xl ml-[2px] md:ml-[20px] mt-10 px-20 ${textClass}`}
            >
              <p dangerouslySetInnerHTML={{ __html: textArray[1] }}></p>
            </div>

            <button
              onClick={onScrollToSubscription}
              className={`group relative min-h-[30px] p-6 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#a43579] text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-xl ml-[2px] md:ml-[20px] lg:ml-[108px] mt-10 px-20 ${textClass}`}
            >
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
                Book your Free Consultation
              </span>
            </button>
            <div className="w-full h-[400px] group absolute min-h-[30px] z-40 sm:w-[150px] md:w-[200px] lg:w-[85%] overflow-hidden border border-white bg-white text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-xl ml-[2px] md:ml-[20px] lg:ml-[108px] mt-[900px]">
              <Product pageIdentifier="Homepage" />
            </div>
          </div>

          <div className={`md:w-full mx-10 md:h-[400px] mt-[800px] hidden ${textClass}`}>
            <div className="sm:mt-[300px] xl:mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5">
                <div className="flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500">
                  <img src={whyimage1} className="w-40 h-40 mb-4" />
                  <p className="text-[#8D4374]">We are different</p>
                  <p className="text-sm font-normal p-4">
                    Our award-winning team is not just about providing care; it's about creating a family atmosphere.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500">
                  <img src={whyimage2} className="w-40 h-40 mb-4" />
                  <p className="text-[#8D4374]">Warm Hands, Kind Hearts</p>
                  <p className="text-sm font-normal p-4">
                    We listen to your needs and create a care plan that is unique to you, adapting as your needs change.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500">
                  <img src={whyimage3} className="w-40 h-40 mb-4" />
                  <p className="text-[#8D4374]">We are Always Learning</p>
                  <p className="text-sm font-normal p-4">
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
