import React, { useState,useEffect } from 'react';
import mainimage1 from './assets/servicemain2.jpg';
import mainhero from './assets/abouthero.jpg'
import mainimage2 from './assets/blog2.jpeg';
import mainimage3 from './assets/blog1.jpeg';
import mainimage4 from './assets/blog2.jpeg';
import servicesmain from './assets/servicemain1.jpeg'
import servicelist1 from './assets/serviceslist3.jpeg'
import servicelist2 from './assets/servicelist1.jpeg'
import servicelist3 from './assets/servicelists2.jpeg'
import servicelist4 from './assets/servicelists3.jpeg'
import servicelist5 from './assets/servicelisst4.jpeg'
import servicelist6 from './assets/absnew.jpeg'
import nutritionimage from './assets/nutritionimage.jpeg'
import overnightcare from './assets/overnightcare.jpeg'
import overnights from './assets/overnights.jpeg'
import welbeing from './assets/serviceseconds.jpeg'
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Navbar/footer';
import Testimonial from './components/Navbar/Testimonial';
import pngimage from './assets/caring.png'
import pngimage2 from './assets/supportive.png'
import pngimage3 from './assets/proffessional.png'
import heroservices from './assets/serviceimagescare.jpeg'
import servicehero2 from './assets/service3mains.jpeg'
import servicehero3 from './assets/overnightcare.jpeg'
import aiimage4 from './assets/aiimage4.png'
import aiimage5 from './assets/aiimage5.png'
import aiimage6 from './assets/aiimage6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Emailsubscription from './components/Navbar/emailsubscription';
import Product from './components/Navbar/about';
import axios from 'axios';
import Reactloader from './reactloader';

function Servicespage3() {



  
  
  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesArraySecond, setImagesArraySecond] = useState([]);
  const [textArraySecond, setTextArraySecond] = useState([]);
  const [imagesArrayThird, setImagesArrayThird] = useState([]);
  const [textArrayThird, setTextArrayThird] = useState([]);
  const [imagesArrayFourth, setImagesArrayFourth] = useState([]);
  const [textArrayFourth, setTextArrayFourth] = useState([]);

  const url = import.meta.env.VITE_HOST_URL;

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/ServicePage2`);

        // Extract data for the first section
     
        const extractedImages = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ServicePage 2 FirstPart")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ServicePage 2 FirstPart")
          .map(item => item.text)
          .flat();

        // Extract data for the second section
        const extractedImagesSecond = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ServicePage 2 SecondPart")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ServicePage 2 SecondPart")
          .map(item => item.text)
          .flat();

          const extractedImagesThird = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ThirdSection")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "ServicePage2" && item.label === "ThirdSection")
          .map(item => item.text)
          .flat();

        // Update state variables
        setImagesArray(extractedImages);
        setTextArray(extractedText);
        setImagesArraySecond(extractedImagesSecond);
        setTextArraySecond(extractedTextSecond);
        setImagesArrayThird(extractedImagesThird);
        setTextArrayThird(extractedTextThird);
      

        console.log("First Section Text:", extractedText);
        console.log("Second Section Text:", extractedTextSecond);
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };

    fetchCMSData();
  }, []); // Dependency array to run only once on mount








  const script = document.createElement('script');
  script.src = 'https://api.homecare.co.uk/assets/js/review_widget_carousel.js?displaydiv=tgrcw_0059ab4d&displayid=65432232653&displaycount=50&displaylogo=true&displayscore=true&displaybackground=true&displayratingreview=true&displaylink=true&displayminoverallrating=0&linksnofollow=false&displayfontsize=large';
  script.async = true;
  script.className = 'tg-review-carousel-widget';


  document.body.appendChild(script);

  const [activeService, setActiveService] = useState(0); // Set default to the first item

  const servicemainlist = [
    {
      title: 'Daily Support/Visiting Care Services',
      description: 'Holistic Care Services offers a variety of customized visiting care services tailored to provide our clients and their families with the right choices and more possibilities while ensuring they oversee their care',
      src: mainimage1,
      submenu: [
        {
          name: 'Personal Care',
          image: mainimage1,
          details: 'We assist with daily activities like bathing, dressing, and grooming to ensure our clients maintain their dignity and well-being.',
        },
        {
          name: 'Medication Support',
          image: mainimage2,
          details: 'Our caregivers help with medication reminders and administration to ensure our clients take their medications on time and safely.',
        },
        {
          name: 'Domestic Assistance/Household Tasks',
          image: mainimage3,
          details: 'We provide support with household chores such as cleaning, laundry, and meal preparation to help maintain a clean and comfortable living environment.',
        },
        {
          name: 'Nutrition and Hydration',
          image: mainimage3,
          details: 'Led by Dr. Kunbi Taiwo, our team understands the importance of good nutrition and hydration. We assist with meal planning and preparation to ensure our clients receive balanced and healthy meals.',
        },
      ],
    },
    {
      title: 'Staying Active & Engaged',
      description: 'Holistic Care Services encourages our clients to stay active and engaged to promote their overall well-being',
      src: mainimage2,
      submenu: [
        {
          name: 'Exercise Programs',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Jogging',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Kayaking',
          image: 'null',
          details: 'ok',
        },
      ],
    },
    {
      title: 'Live-in Care',
      description: 'Enjoy personalized attention and companionship in the comfort of your own home. Our Live-in Care services provide 24-hour support tailored to meet the individual needs of each client. This service promotes independence and dignity while ensuring safety and well-being through comprehensive care, including personal care, medication management, and assistance with daily activities',
      src: mainimage3,
      submenu: [
        {
          name: '24-Hour Support',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Companionship',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Home Safety',
          image: 'null',
          details: 'ok',
        },
      ],
    },
    {
      title: 'Specialised Care',
      description: 'We provide tailored care to meet the unique needs of each individual, shaped by their specific conditions or situations.',
      src: mainimage4,
      submenu: [
        {
          name: 'Dementia Care',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'All Care',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Status Care',
          image: 'null',
          details: 'ok',
        },
      ],
    },
  ];

  const handleClick = (index) => {
    setActiveService(index); // Set the clicked service as active
  };

  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Reactloader/>

      <div className='relative'>
  <div className=' mt-20 relative'>
    <img src={imagesArray[0]} className='h-[650px] xl:w-[100%] md:flex lg:flex hidden xl:flex' />
    <img src={servicehero3} className='h-[500px] flex xl:hidden xl:w-[70%] md:hidden xl:ml-60 mx-0 ' />
  </div>
  <div className="absolute inset-0 hidden xl:flex lg:flex flex-col justify-center items-center z-50 mt-[420px] text-white">
    <h1 className="text-6xl text-white rounded-full font-thin mb-6 text-center ">
      {textArray[0]}
    </h1>   

    <p className="text-lg font-thin text-center">
     {textArray[1]}
    </p>

  </div>
</div>


      
      <div className=" xl:hidden lg-hidden ">
        <h1 className="text-6xl text-black mt-10   rounded-full font-thin mb-6 mx-auto text-center ">
         {textArray[0]}
          
          <p className="text-lg font-thin   ">
            {textArray[1]}
          </p>
        </h1>
      </div>
      <div ><h1 className='text-center  text-[30px] text-[#8D4374] xl:mt-10 '>{textArray[2]}</h1>
      <p className='text-center mb-10'>{textArray[3]}</p></div>
      <div className='xl:w-[100%] h-auto xl:h-[1300px] lg-[1300px] bg-gray-300/20 mb-10  pb-10  shadow-xl'>
      <div className='w-full xl:h-[140px]  grid lg:grid-cols-1 md:grid-cols-2 mb-10 '>
       
        {/* Mission Statement Section */}
        <div className="sm:w-[70%]  lg:w-[82%] md:w-[100vw]  md-h-[600px]  sm:ml-80 sm:h-[200px] lg:h-[600px] lg:mx-auto md:h-[450px]  bg-gray-100 md:ml-[75px]  shadow-xl sm:rounded-2xl mb-10 grid sm:grid-cols-2 ">
          <div className="p-6 sm:p-5">
            <p className="font-light text-[5vw] sm:text-[40px] md:text[20px] text-[#8D4374] "  >{textArraySecond[0]}</p>
            <p className="font-sans text-[4vw] md-text-[8vw] sm:text-[16px] text-balance">
          {textArraySecond[1]}
           <br/>
            <span className='hidden lg:block'>
          {textArraySecond[2]}
            </span>
            </p>
          </div>
          <img src={imagesArraySecond[0]} className="w-full lg:h-[600px] sm:h-[600px] md:mr-[100px] md:h-[400px] object-cover" alt="Descriptive Alt Text" />
        </div>
       
       {/* second services */}


      

        

       





      </div>
    

      
    






      <div className='w-full xl:px-0 xl:mt-[500px] '>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 xl:gap-6 xl:w-[100%] mx-auto xl:mt-[200px] xl:mb-20'>
    <div className='flex flex-col items-center'>
      <img src={aiimage4} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Caring' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Caring
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={aiimage5} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Supportive' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Supportive
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={aiimage6} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Personalized' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Personalized
      </h1>
    </div>
  </div>
</div>


      </div>
      <div>
      
    
      </div>
<Testimonial/>
   <Emailsubscription/>
   
      <Footer />
    </div>
  );
}

export default Servicespage3;
