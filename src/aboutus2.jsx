import React from 'react';
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
function Aboutus2() {
  return (
    <div>
        <Navbar/>
      {/* About Us Header */}
      <div className="flex justify-center  pt-10">
  <h1 className="text-[#8D4374] mt-10 text-[10vw] sm:text-[60px] md:text-[80px] lg:text-[100px] font-light xl:px-26 text-center">
    About Us
  </h1>
</div>

      <p className="text-[10px] sm:text-[20px] text-black sm:px-24 px-4 xl:mx-20 text-[4vw] ">
        At Holistic Care Services, we believe in creating a world where our clients flourish.
        Led by the visionary GP Dr. Kunbi Taiwo and Tola Taiwo, our team of compassionate and 
        highly trained care professionals provides personalized care that goes beyond mere assistance. 
        Our mission is to celebrate each triumph, big or small, and remind our clients that aging is 
        not about limitations but embracing life’s possibilities.
      </p>

      {/* Gentle Touch Section */}
      <div className="w-full h-full xl:px-20 mt-10 lg:mt-2">
        <h1 className="text-[#8D4374] text-center text-[6vw] lg:text-[30px] xl:text-[40px] mb-2 font-thin">
          A Gentle Touch for a Golden Age
        </h1>
        <p className="text-center  sm:text-base sm:px-20 px-10 xl:px-26 text-[4vw]">
          At Holistic Care Services, we understand the importance of familiarity and independence, 
          especially as we age. Whether it’s a gentle reminder to take your medication, a cup of tea 
          and a chat, or personalized attention and companionship from a live-in carer, we are here for you.
        </p>
      </div>

      {/* Championing Independence Section */}
      <div className="w-full h-full xl:px-20 xl:mt-2 mt-10">
        <h1 className="text-[#8D4374] text-center text-[6vw] lg:text-[30px] xl:text-[40px] font-thin">
          Championing Your Independence
        </h1>
        <p className="text-center sm:text-base sm:px-20 px-10 xl:mx-26 xl:mt-2 text-[4vw] mt-2 lg:mt-1">
        Many children worry about their parents aging alone. We understand. That’s why we offer a free, no-obligation consultation to discuss your needs and answer any questions you may have. We will come to your home, chat about your hopes and dreams, and create a personalized care plan that allows you to flourish right where you belong.

        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="sm:w-[70%] md:w-[82%] mt-10 sm:ml-80 sm:h-[200px] lg:h-[300px] lg:mx-auto md:h-[450px] bg-gray-100 md:ml-[75px] shadow-xl sm:rounded-2xl mb-10 grid sm:grid-cols-2">
        <div className="p-6 sm:p-5">
          <p className="font-light text-[5vw] sm:text-[40px] md:text[20px] text-[#8D4374]" >Mission Statement</p>
          <p className=" font-sans text-[4vw] sm:text-[16px] text-balance">
          Warm hands meet kind eyes, creating a world where our clients flourish. We go beyond mere assistance,
              fostering independence through personalised care plans. Meaningful connections blossom around shared
              activities and heartfelt conversations, enriching our clients' days with moments of joy and purpose.
              Each triumph, big or small, is celebrated, reminding them that aging is not about limitations, but about
              embracing life's possibilities.
          </p>
        </div>
        <img src={image3} className="w-full h-[300px] object-cover" alt="Mission Image" />
      </div>

      {/* Vision Statement Section */}
      <div className="sm:w-[70%] md:w-[82%] lg:h-[300px] lg:mx-auto md:mx-auto md:h-[450px] bg-gray-200 sm:h-[300px] shadow-2xl sm:ml-[200px] grid sm:grid-cols-2">
        <img src={aboutimg2} className="w-full h-[300px] object-cover" alt="Vision Image" />
        <div className="p-6 sm:p-5">
          <p className="font-light text-[5vw] sm:text-[40px] text-[#8D4374]" >Vision Statement</p>
          <p className="font-sans text-[4vw] sm:text-[16px] text-balance">
          At Holistic Care Services, our incredible care team doesn't just support; we take the burden off you and your loved ones. With open hearts and caring hands, we weave laughter, love, and unwavering support into your home, helping you live a rich and fulfilling life, just as you deserve.
          </p>
        </div>
      </div>

      {/* Meet The Team Section */}
      <section className="bg-[#a43579] mt-40">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-thin text-center text-white">
            Meet The Team
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-white">
            Get to Know Our Dedicated Team: Compassionate Care, Professional Support
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-primary mt-10">
            Meet The Directors
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
            <div className="flex justify-center lg:justify-around">
              <img src={directors} className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] object-cover rounded-lg" alt="Directors" />
            </div>
            <div className="text-white text-center lg:text-left">
              <p className="text-sm sm:text-base lg:text-lg font-thin italic">
                Mr. Tola Taiwo and Dr. Kunbi Taiwo. Dr. Kunbi Taiwo is a GP working locally in Liverpool, and Tola has a background in the financial sector.
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
    We were both very close to our grandmothers of beloved memory and in their
    later years, they needed care due to worsening mobility. This exposed us to
    the difficulties faced by the elderly in maintaining their independence in
    their golden age, and this birthed the vision to help people age gracefully
    and flourish in their own homes.
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

              <p className="font-semibold text-primary text-center">Tola Taiwo & Kunbi Taiwo</p>
            </div>
          </div>

          <div className="w-full bg-[#a43579] px-6 lg:px-10 pt-10 mt-20">
            <h1 className="text-2xl sm:text-2xl lg:text-2xl font-semibold text-primary text-center">
              Meet our dedicated team members
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
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

            
      <div class="block items-center h-auto px-6 py-4 transition-colors duration-300 bg-white border rounded-xl group  dark:border-gray-700 text-center">
      <img class="w-[300px] h-[300px]  " src={supervisor1} alt="Kevin Smyth"/>
        <div>
          <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold text-[#8D4374] ">Jo Mitchell</h2>
          <p class="mt-2 text-sm sm:text-base lg:text-lg text-gray-500 group-hover:text-gray-300">Recruitment Compliance Officer</p>
        </div>
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
