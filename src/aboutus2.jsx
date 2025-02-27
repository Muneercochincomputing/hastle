import React from 'react';
import { useEffect,useState } from 'react';
import image1 from './assets/aboutus.jpeg';
import image2 from './assets/aboutpagemob.jpeg';
import image3 from './assets/blog1.jpeg';
import manager from './assets/managerimage.jpeg'
import stock2 from './assets/stock2.jpeg'
import stock3 from './assets/IMG_6054 .jpg'
import abouthero from'./assets/abouthero.jpg'
import kelismyth from './assets/kelismyth.jpeg'
import stock from './assets/IMG_6135 .jpg'
import aboutimg2 from './assets/aboutimage2new.jpeg'
import whyimage1 from './assets/charity.png';
import whyimage2 from './assets/family.png';
import whyimage3 from './assets/friends.png';
import aboutussub1 from './assets/aboutussub1.jpeg'
import aboutussub2 from './assets/aboutussub2.jpeg'
import aboutussub3 from './assets/absnew.jpeg'
import aiimage1 from './assets/aiimage1.png'
import aiimage2 from './assets/aiimage2.png'
import aiimage3 from './assets/aiimage3.png'
import newimage from './assets/new.png'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import demo from './assets/aboutreview.mp4';
import directors from './assets/directors.jpeg'
import supervisor1 from './assets/supervisor1.jpeg'
import supervisor2 from './assets/supervisor2.jpeg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie';
import animationData from './animaioplaybutton.json'; 
import { FaPhone, FaRegUser, FaBuffer } from "react-icons/fa";

import Emailsubscription from './components/Navbar/Emailsubscription';
import Testimonial from './components/Navbar/Testimonial';
import axios from 'axios';

import animationDatas from '../Animation - 1734410329680.json';

function Aboutus2() {

  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesArraySecond, setImagesArraySecond] = useState([]);
  const [textArraySecond, setTextArraySecond] = useState([]);
  const [imagesArrayThird, setImagesArrayThird] = useState([]);
  const [textArrayThird, setTextArrayThird] = useState([]);
  const [imagesArrayFourth, setImagesArrayFourth] = useState([]);
  const [textArrayFourth, setTextArrayFourth] = useState([]);
 const [visible, setVisible] = useState(true);

 const url = import.meta.env.VITE_HOST_URL;


  useEffect(() => {
  
        
  
        const timer = setTimeout(() => {
          setVisible(false);
        }, 8000); // Hide the spinner after 2 seconds
    
        return () => clearTimeout(timer); // Clean up the timer on component unmount
      }, []);
  



  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/AboutPage2`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "About2FirstSection")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "About2FirstSection")
          .map(item => item.text)
          .flat();

        // Extract data for the second section
        const extractedImagesSecond = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "Secondsection")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "Secondsection")
          .map(item => item.text)
          .flat();

          const extractedImagesThird = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "About2ThirdSection")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "About2ThirdSection")
          .map(item => item.text)
          .flat();

          const extractedImagesFourth = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "FourthSection")
          .map(item => item.images)
          .flat();

        const extractedTextFourth = result.data
          .filter(item => item.page === "AboutPage2" && item.label === "FourthSection")
          .map(item => item.text)
          .flat();

        // Update state variables
        setImagesArray(extractedImages);
        setTextArray(extractedText);
        setImagesArraySecond(extractedImagesSecond);
        setTextArraySecond(extractedTextSecond);
        setImagesArrayThird(extractedImagesThird);
        setTextArrayThird(extractedTextThird);
        setImagesArrayFourth(extractedImagesFourth);
        setTextArrayFourth(extractedTextFourth);

        console.log("First Section Text:", extractedText);
        console.log("Second Section Text:", extractedTextSecond);
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };

    fetchCMSData();
  }, []); // Dependency array to run only once on mount

  return (
    <div>
        <Navbar/>
      {/* About Us Header */}

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
      



      <div className="flex justify-center  pt-10">


 


  <h1 className="text-[#8D4374] mt-10 text-[10vw] sm:text-[60px] md:text-[80px] lg:text-[100px] font-light xl:px-26 text-center">
  <p dangerouslySetInnerHTML={{ __html: textArray[0] }}></p>
  </h1>
</div>

      <p className="text-[10px] sm:text-[20px] text-black sm:px-24 px-4 xl:mx-20 text-[4vw] ">
      <p dangerouslySetInnerHTML={{ __html: textArray[1] }}></p>
      </p>

      {/* Gentle Touch Section */}
      <div className="w-full h-full xl:px-20 mt-10 lg:mt-2">
        <h1 className="text-[#8D4374] text-center text-[6vw] lg:text-[30px] xl:text-[40px] mb-2 font-thin">
        <p dangerouslySetInnerHTML={{ __html: textArray[2] }}></p>
        </h1>
        <p className="text-center  sm:text-base sm:px-20 px-10 xl:px-26 text-[4vw]">
        <p dangerouslySetInnerHTML={{ __html: textArray[3] }}></p>
        
        </p>
      </div>

      {/* Championing Independence Section */}
      <div className="w-full h-full xl:px-20 xl:mt-2 mt-10">
        <h1 className="text-[#8D4374] text-center text-[6vw] lg:text-[30px] xl:text-[40px] font-thin">
        <p dangerouslySetInnerHTML={{ __html: textArray[4] }}></p>
        </h1>
        <p className="text-center sm:text-base sm:px-20 px-10 xl:mx-26 xl:mt-2 text-[4vw] mt-2 lg:mt-1">
        <p dangerouslySetInnerHTML={{ __html: textArray[5] }}></p>

        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="sm:w-[70%] md:w-[82%] mt-10 sm:ml-80 sm:h-[200px] lg:h-[300px] lg:mx-auto md:h-[450px] bg-gray-100 md:ml-[75px] shadow-xl sm:rounded-2xl mb-10 grid sm:grid-cols-2">
        <div className="p-6 sm:p-5">
          <p className="font-light text-[5vw] sm:text-[40px] md:text[20px] text-[#8D4374]" > <p dangerouslySetInnerHTML={{ __html: textArraySecond[0] }}></p></p>
          <p className=" font-sans text-[4vw] sm:text-[16px] text-balance">
          <p dangerouslySetInnerHTML={{ __html: textArraySecond[1] }}></p>
          </p>
        </div>
        <img src={imagesArraySecond[0]} className="w-full h-[300px] object-cover" alt="Mission Image" />
      </div>

      {/* Vision Statement Section */}
      <div className="sm:w-[70%] md:w-[82%] lg:h-[300px] lg:mx-auto md:mx-auto md:h-[450px] bg-gray-200 sm:h-[300px] shadow-2xl sm:ml-[200px] grid sm:grid-cols-2">
        <img src={imagesArraySecond[1]} className="w-full h-[300px] object-cover" alt="Vision Image" />
        <div className="p-6 sm:p-5">
          <p className="font-light text-[5vw] sm:text-[40px] text-[#8D4374]" ><p dangerouslySetInnerHTML={{ __html: textArraySecond[2] }}></p></p>
          <p className="font-sans text-[4vw] sm:text-[16px] text-balance">
          <p dangerouslySetInnerHTML={{ __html: textArraySecond[3] }}></p>
          </p>
        </div>
      </div>

      {/* Meet The Team Section */}
      <section className="bg-[#a43579] mt-40">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-thin text-center text-white">
          <p dangerouslySetInnerHTML={{ __html: textArrayThird[0] }}></p>
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-white">
          <p dangerouslySetInnerHTML={{ __html: textArrayThird[1] }}></p>
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-primary mt-10">
          <p dangerouslySetInnerHTML={{ __html: textArrayThird[2] }}></p>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
            <div className="flex justify-center lg:justify-around">
              <img src={imagesArrayThird[0]} className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] object-cover rounded-lg" alt="Directors" />
            </div>
            <div className="text-white text-center lg:text-left">
              <p className="text-sm sm:text-base lg:text-lg font-thin italic">
              <p dangerouslySetInnerHTML={{ __html: textArrayThird[3] }}></p>
              </p>
              <div className="my-2 relative">
  {/* First SVG Icon */}
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400 dark:text-gray-600 fill-current "
  >
    <path
      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
      fill="white"
    />
  </svg>

  {/* Paragraph with Text and Closing Quotes */}
  <p className="px-6 py-1 text-sm sm:text-base lg:text-lg italic flex items-center">
  <p dangerouslySetInnerHTML={{ __html: textArrayThird[4] }}></p>
  </p>

  {/* Second SVG Icon */}
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400 dark:text-gray-600 fill-current absolute right-4 sm:right-10"
    transform="scale(-1, 1)"
  >
    <path
      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
      fill="white"
    />
  </svg>
</div>

              <p className="font-semibold text-primary text-center">  <p dangerouslySetInnerHTML={{ __html: textArrayThird[5] }}></p></p>
            </div>
          </div>

          <div className="w-full bg-[#a43579] px-6 lg:px-10 pt-10 mt-20">
            <h1 className="text-2xl sm:text-2xl lg:text-2xl font-semibold text-primary text-center">
              Meet our dedicated team members
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
           <div className=''></div>
            {/* Deputy Manager */}
            <div className="block items-center h-auto px-6 py-4 bg-white border rounded-xl group text-center">
              <img className="w-[300px] h-[300px]" src={manager} alt="Kevin Smyth" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#8D4374]">Kevin Smyth</h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500">Deputy Manager</p>
            </div>
            
            {/* Field Care Supervisor */}
            <div className="block items-center h-auto px-6 py-4 bg-white border rounded-xl group text-center">
              <img className="w-[300px] h-[300px]" src={kelismyth} alt="Paula Smith" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#8D4374]">Paula Smith</h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500">Field Care Supervisor</p>
            </div>

            {/* Another Field Care Supervisor */}
            <div className="block items-center h-auto px-6 py-4 bg-white border rounded-xl group text-center">
              <img className="w-[300px] h-[300px]" src={supervisor2} alt="Kerry Fisher" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#8D4374]">Kerry Fisher</h2>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500">Field Care Supervisor</p>
            </div>

            
      
          </div>
        </div>
      </section>
      <div className='mt-10'>
      <Testimonial/>
      </div>
      <Emailsubscription />
    
      <Footer/>
    
      
    </div>
  );
}

export default Aboutus2;
