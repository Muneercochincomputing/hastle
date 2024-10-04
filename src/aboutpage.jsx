import React, { useState, useEffect,useRef  } from 'react';
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
import Product from './components/Navbar/about';
import Testimonial from './components/Navbar/Testimonial';

function About() {


  const topprodect = [
    {
        id:1,
        src:stock3,
        tittle:'We listen to your concerns',
        Description: "We take the time to understand your loved one's needs, preferences, and goals so we can create a truly personalised care plan."
       
    },
    {
        id:1,
        src:stock2,
        tittle:'We empower your loved one',
        Description: "Our compassionate carers provide assistance with daily tasks, medication management, and companionship, creating independence and        well-being."

       
    },
    {
        id:1,
        src:stock,
        tittle:'We give you peace of mind',
        Description: "With our reliable and transparent services, you can rest assured that your loved one is receiving the highest quality care."


       
    }
   
    
]


const vedios = [
 
  {
      id:1,
      src:demo,
      tittle:'We empower your loved one',
      Description: `Our compassionate care provide assistance with daiytasks,medication,management and companionship,creating independance and well-being.`
     
  },
  
 
  
]




  const subscriptionRef = useRef(null);

  const handleScrollToSubscription = () => {
   
    if (subscriptionRef.current) {
      subscriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };






  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onScrollToSubscription={handleScrollToSubscription} /> {/* Navbar Component */}
      
     

     {/* Additional Content */}
 <div className='  pt-[150px]'>
          <h1 className='text-center text-sm sm:text-[40px] font-bold text-[#8D4374] sm:mb-10 mb-5 '>
           <p className='text-[25px] lg:text-[40px]'> What sets us apart?</p>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage2} className='w-40 h-40 mb-4'/>
             <p className='text-[#8D4374]'>We are different</p> 
              <p className='text-sm font-normal p-4 '>
              Our award-winning team is not just about providing care; it's about creating a family atmosphere. Our care professionals are carefully chosen for their warmth, compassion, and dedication. They will become a trusted friend, someone to chat with, share stories with, and even help with those little things that make a big difference.
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage1} className='w-40 h-40 mb-4'/>
              <p className='text-[#8D4374]'>Warm Hands, Kind Hearts</p>
              <p className='text-sm font-normal p-4'>
              We listen to your needs and create a care plan that is unique to you, adapting as your needs change. They will treat you with dignity and become trusted companions, ready to help with daily tasks or simply share a conversation.
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

     
     




     
<ul className='list-disc list-inside px-10 xl:px-0'>

<p className='relative z-20 w-[100%] sm:w-[100%] mx-auto text-black sm:px-40 mt-10 sm:text-[20px]'>
  <li>
    At <span className='italic font-bold text-[#8D4374]'>Holistic Care Services</span>, we understand that you want to ensure your loved one ages gracefully and comfortably in their own home.<br/><br/>
  </li>

  <li>
    To <span className='italic font-bold text-[#8D4374]'>achieve</span> that, you need compassionate and reliable care that respects their independence and enhances their quality of life.<br/><br/>
  </li>

  <li>
    The <span className='italic font-bold text-[#8D4374]'>problem</span> is that finding trustworthy care that truly understands your loved one's unique needs can be overwhelming and stressful.<br/><br/>
  </li>

  <li>
    We <span className='italic font-bold text-[#8D4374]'>believe</span> that everyone deserves to age with dignity, surrounded by love and support.<br/><br/>
  </li>

  <li>
    We <span className='italic font-bold text-[#8D4374]'>understand</span> the emotional weight of navigating care options and the desire to provide the very best for your loved one.<br/><br/>
  </li>
<li>
  <span className='italic font-bold text-[#8D4374]'>
    That's why we're here to guide and support you every step of the way
  </span>, offering personalised home care services that enable your loved one to flourish.<br/><br/>
  </li>
 


</p>

</ul>
     
     
     
     
      {/* Section with dynamic background image for mobile and desktop */}
      
      <div className='container mt-10  '>
        {/* Header section */}
        <p className="text-[6vw] md:text-[45px] text-center text-[#8D4374] font-thin" data-aos="fade-up">
 Here's how we help you achieve that
    </p>
       <div  class="flex items-center justify-center  ">
         {/* Body section */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 hover:text-white  md:gap-10 mr-10 place-items-center  '>
        {topprodect.map((data, index) => (
          
          
          
    
 <div
    key={data.id}
   
    
    className='w-full sm:mr-10 max-w-xs mt-[40px] sm:max-w-sm md:max-w-md bg-white  rounded-2xl  relative shadow-xl p-6 flex flex-col items-center transition-colors translate-x-4 duration-1200 group hover:bg-[#8D4374]  hover:text-white'
 
 >
   
    <img 
      src={data.src} 
      className='w-[500px]  lg:h-[400px] h-[200px] object-cover rounded-xl block mx-auto transform transition-transform duration-300 group-hover:scale-105' 
    
    />
    <div>
    <p className='font-bold text-[16px] lg:text-[20px] group-hover:text-[white] text-[#8D4374] rounded-xl mb-2 mt-2 text-center'>
  {data.tittle}
</p>
<p className='p-2 rounded-xl w-full text-center hover:text-white group-hover:text-[white] text-[12px] lg:text-[15px] text-black'>
  {data.Description}
</p>
    </div>
   

  </div>

))}

</div>

       </div>
       
<div className="flex flex-col items-center justify-center mt-10">
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 capitalize mt-10 dark:text-[#8D4374]">
    
    <p className="italic font-bold text-[#8D4374]">Take the first step towards peace of mind</p>
    <span className="w-20 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
  </h2>
<Link to='/contactpage'>
  <button className={`group relative min-h-[30px] p-6 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#a43579] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-purple-500 hover:bg-white hover:before:h-full hover:after:h-full rounded-xl mt-4 px-20`}>
    <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
      Schedule a Free Consultation
    </span>
  </button>
  </Link>
</div>
      </div>




 


       




      {/* Main content section */}
      <div className="relative z-20 w-[90%] sm:w-[100%] mx-auto text-black p-4">
        {/* Mission Statement Section */}
       

        {/* Why Choose Us Section */}
       


        {/* Video Section with Overlay */}
       
            {/* Overlay */}
        
        
        

      
       
      </div>




      <div className="text-center  mb-4  ">

      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 hover:text-white bg-primary  place-items-center lg:py-10 '>
  {vedios.map((data, index) => (
    <div
      key={data.src}
      className='w-full max-w-xs mt-[40px] sm:max-w-sm md:max-w-md bg-white rounded-2xl relative shadow-xl p-6 flex flex-col items-end transition-transform duration-500 hover:text-white group'
    >
      <video
        id="demoVideo"
        className='w-full sm:w-[500px] h-auto object-contain rounded-xl block mx-auto transition-transform duration-300'
        muted
        loop
        controls
      >
        <source src={data.src} type="video/mp4" />
      </video>
    </div>
  ))}
  
  <div className="flex flex-col items-left px-4  sm:py-4   ">
  <p className="text-[30px] sm:text-[45px] sm:ml-10 lg:ml-1 lg:text-left   text-black" data-aos="fade-up">
  Experience the Holistic Difference
</p>

    <p className="text-[14px] sm:text-[15px] text-center mt-5 lg:text-left text-white lg:mr-[50px] sm:text-center sm:px-10 lg:px-0">
  Imagine waking up in your own home, bathed in warm sunlight, with everything you need at your fingertips—gentle assistance, friendly conversation, and the peace of knowing you're surrounded by care that truly understands your needs. 
  We invite you to experience the Holistic difference. Let's sit down, discuss your hopes and dreams, and create a personalised care plan that helps you thrive in the place you love most—your home.
</p>
<div className='h-20'></div>

  </div>
</div>









  

</div>


<Testimonial/> 

      <Emailsubscription ref={subscriptionRef}/>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default About;
