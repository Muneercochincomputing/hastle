import React, { useRef,useEffect,useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero';

import Product from './components/Navbar/about';
import TopProducts from './components/Navbar/TopProducts';
import Banner from './components/Navbar/bannner';
import Subscription from './components/Navbar/Subscription';
import Testimonial from './components/Navbar/Testimonial';
import Footer from './components/Navbar/Footer';
import AnimatedContainer from './components/Navbar/HoverTest';
import ScrollableContainer from './components/Navbar/HoverTestMobile';
import Blog from './components/Navbar/blog';
import ContactSection from './components/Navbar/contact';
import Training from './components/Navbar/trainingcourosal';
import AnimatedContainerMob from './components/Navbar/HoverTestMobile';
import AnimatedContainerTab from './components/Navbar/hoveresttablets';
import Whychooseus from './components/Navbar/whychooseus';
import Cqc from './components/Navbar/cqc';
import axios from 'axios'
import Lottie from 'react-lottie';
import animationData from './../Animation - 1734410329680.json'; // Replace with your Lottie JSON file





 

function Homepage() {
  const [imagesArrayHero,setImagesArrayHero]  = useState([])
  const [textArrayHero,setTextArrayHero]  = useState([])
  const [imagesArrayHelp_Support,setImagesArrayHelp_Support]  = useState([])
  const [textArrayHelp_Support,setTextArrayHelp_Support]  = useState([])
  const [imagesArrayGetting_Started,setImagesArrayGetting_Started]  = useState([])
  const [textArrayGetting_Started,setTextArrayGetting_Started]  = useState([])
  const [imagesArrayYour_Lovedone,setImagesArrayYour_Lovedone]  = useState([])
  const [textArrayYour_Lovedone,setTextArrayYour_Lovedone]  = useState([])
  const [imagesArrayBanner,setImagesArrayBanner]  = useState([])
  const [textArrayBanner,setTextArrayBanner]  = useState([])
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
        const result = await axios.get(`${url}/getcms/HomePage`);
        
        console.log(result)
        const imagesArrayHero = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'Herosection') // Filter by page
        .map(item => item.images) // Map to the images array
        .flat();


        const textArrayArrayHero = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'Herosection') // Filter by page
        .map(item => item.text) // Map to the text property
        .flat(); // Flatten the resulting arrays


        const imagesArrayHelp_Support = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'HelpAndSupoort Section') // Filter by page
        .map(item => item.images) // Map to the images array
        .flat();


        const textArrayHelp_Support = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'HelpAndSupoort Section') // Filter by page
        .map(item => item.text) // Map to the text property
        .flat(); // Flatten the resulting arrays
      


        const imagesArrayGetting_Started = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'GettingStarted section') // Filter by page
        .map(item => item.images) // Map to the images array
        .flat();


        const textArrayGetting_Started = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'GettingStarted section') // Filter by page
        .map(item => item.text) // Map to the text property
        .flat(); // Flatten the resulting arrays


        const imagesArrayYour_Lovedone = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'YourLovedOneSection') // Filter by page
        .map(item => item.images) // Map to the images array
        .flat();


        const textArrayYour_Lovedone = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'YourLovedOneSection') // Filter by page
        .map(item => item.text) // Map to the text property
        .flat(); // Flatten the resulting arrays



        const imagesArrayBanner = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'Bannersection') // Filter by page
        .map(item => item.images) // Map to the images array
        .flat();


        const textArrayBanner = result.data
        .filter(item => item.page === 'HomePage' && item.label === 'Bannersection') // Filter by page
        .map(item => item.text) // Map to the text property
        .flat(); // Flatten the resulting arrays
      
      console.log(textArrayArrayHero);
      setImagesArrayHero(imagesArrayHero)
      setTextArrayHero(textArrayArrayHero)
      setImagesArrayHelp_Support(imagesArrayHelp_Support)
      setTextArrayHelp_Support(textArrayHelp_Support)
      setImagesArrayGetting_Started(imagesArrayGetting_Started)
      setTextArrayGetting_Started(textArrayGetting_Started)
      setImagesArrayYour_Lovedone(imagesArrayYour_Lovedone)
      setTextArrayYour_Lovedone(textArrayYour_Lovedone)
      setImagesArrayBanner(imagesArrayBanner)
      setTextArrayBanner(textArrayBanner)


        // Update state variables
       
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };
    fetchCMSData();
}, []);




  const subscriptionRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSubscription = () => {
   
    if (subscriptionRef.current) {
      subscriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
   
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='overflow-hidden  '>
       <div
  className={`justify-start min-h-screen bg-[#8D4374] bg-opacity-100 shadow-bulge top-0 left-0 right-0 bottom-0 absolute ${visible ? '' : 'hidden'}`}
  style={{ zIndex: 9999 }}
>
  {visible && (
    <Lottie
      options={{
        animationData: animationData,
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
    <span className="block md:[10px]">HOLISTIC CARE SERVICES</span>
    <span className="block font-about md:text-sm text-xs">Your loved ones deserve the best care—trust us to deliver</span>
  </h1>
</div>

      <Navbar onScrollToSubscription={handleScrollToContact} />
      <div className='overflow-hidden'><Hero /></div>
      <AnimatedContainer onScrollToSubscription={handleScrollToContact} imagesArray={imagesArrayHero} textArray={textArrayHero} />
      <div className='overflow-hidden'><AnimatedContainerMob  onScrollToSubscription={handleScrollToContact}  /></div>
      <div className='overflow-hidden'><AnimatedContainerTab /></div>
      <div className='h-[200px] hidden lg:block '></div>
     
      <div className='overflow-hidden'><TopProducts onScrollToSubscription={handleScrollToContact}
     imagesArray={imagesArrayBanner} textArray={textArrayBanner} imageTable={imagesArrayHelp_Support}
     textTable={textArrayHelp_Support} image3rd={imagesArrayGetting_Started} text3rd={textArrayGetting_Started} /></div>
      
      <div className='overflow-hidden'><Banner imagesArray={imagesArrayYour_Lovedone} textArray={textArrayYour_Lovedone}/></div>
      <div className='bg-[#a43579] pt-10 text-white py-10 overflow-hidden' >
      <Whychooseus />
      </div>
      
   
     
   
      <div className='overflow-hidden'><ContactSection  ref={contactRef} /></div>
      <div className='overflow-hidden'><Subscription ref={subscriptionRef}  /></div>
      
      <div className='overflow-hidden'> 
      <Footer />
    
      </div>
      
    </div>
  );
}

export default Homepage;
