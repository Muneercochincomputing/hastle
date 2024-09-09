import React, { useState, useEffect,useRef  } from 'react';
import image1 from './assets/aboutus.jpeg';
import image2 from './assets/aboutpagemob.jpeg';
import image3 from './assets/blog1.jpeg';
import abouthero from'./assets/abouthero.jpg'
import aboutimg2 from './assets/aboutimage2new.jpeg'
import whyimage1 from './assets/charity.png';
import whyimage2 from './assets/family.png';
import whyimage3 from './assets/friends.png';
import aboutussub1 from './assets/aboutussub1.jpeg'
import aboutussub2 from './assets/aboutussub2.jpeg'
import aboutussub3 from './assets/absnew.jpeg'
import newimage from './assets/new.png'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import demo from './assets/aboutdemo.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie';
import animationData from './animaioplaybutton.json'; 
import Emailsubscription from './components/Navbar/Emailsubscription';

function About() {


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
      
      {/* Section with dynamic background image for mobile and desktop */}
      
      <div className="text-center pt-20 mb-4 px-4">
  <h1 className="text-[#800080] text-[8vw] sm:text-[60px] md:text-[80px] lg:text-[100px] font-light">
    About Us
  </h1>
  <p className="text-[10px] sm:text-[20px] text-black sm:px-20 px-4">
    At Holistic Care Services, we believe in creating a world where our clients flourish. 
    Led by the visionary GP Dr. Kunbi Taiwo and Tola Taiwo, our team of compassionate and 
    highly trained care professionals provides personalized care that goes beyond mere assistance. 
    Our mission is to celebrate each triumph, big or small, and remind 
    our clients that aging is not about limitations but embracing life's possibilities
  </p>
</div>

<div
  className="relative sm:w-[90%] md:w-[80%]   mx-auto flex justify-center items-center transition-all duration-500 bg-cover bg-no-repeat "
  style={{
    height: '480px',
    backgroundImage: `url(${image1})`,
  }}
>
  {/* Mobile-specific background image */}
  <div
    className="absolute inset-0 bg-white sm:hidden"
    style={{
      height: '500px',
      backgroundImage: `url(${image2})`,
      backgroundSize: 'cover', // Adjusted to cover the entire container
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center', // Center the image within the container
    }}
  >
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-10"></div>

  {/* Content */}
  <div className="relative flex flex-col items-center px-4">
    {/* Your content here */}
  </div>
</div>



      {/* Main content section */}
      <div className="relative z-20 w-[90%] sm:w-[100%] mx-auto text-black p-4">
        {/* Mission Statement Section */}
        <div className="sm:w-[70%]  md:w-[82%]  mt-10  sm:ml-80 sm:h-[200px] lg:h-[300px] lg:mx-auto md:h-[450px]  bg-gray-100 md:ml-[75px]  shadow-xl sm:rounded-2xl mb-10 grid sm:grid-cols-2">
          <div className="p-6 sm:p-5">
            <p className="font-light text-[5vw] sm:text-[40px] md:text[20px] text-[#800080]" data-aos="fade-up">Mission Statement</p>
            <p className="font-sans text-[4vw] md-text-[8vw] sm:text-[16px] text-balance">
              Warm hands meet kind eyes, creating a world where our clients flourish. We go beyond mere assistance,
              fostering independence through personalized care plans. Meaningful connections blossom around shared
              activities and heartfelt conversations, enriching our clients' days with moments of joy and purpose.
              Each triumph, big or small, is celebrated, reminding them that aging is not about limitations, but about
              embracing life's possibilities.
            </p>
          </div>
          <img src={image3} className="w-full h-[300px] object-cover" alt="Descriptive Alt Text" />
        </div>

        {/* Another Mission Statement Section */}
        <div className="sm:w-[70%]  md:w-[82%] lg:h-[300px] lg:mx-auto  md:mx-auto md:h-[450px]  bg-gray-200 sm:h-[300px] shadow-2xl sm:ml-[200px]  grid sm:grid-cols-2">
          <img src={aboutimg2} className="w-full h-[300px] object-cover" alt="Descriptive Alt Text" />
          <div className="p-6 sm:p-5">
            <p className="font-light text-[5vw] sm:text-[40px] text-[#800080]" data-aos="fade-up">Vision Statement</p>
            <p className="font-sans text-[4vw] sm:text-[16px] text-balance">
            At Holistic Care Services, our incredible Care team doesn't just support; we take the burden off you and your loved ones. With open hearts and caring hands, we weave laughter, love, and unwavering support into your home, helping you live a rich and fulfilling life, just as you deserve
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full sm:w-[80%] xl:w-[82%] mx-auto lg:p-10 mt-10 lg:mx-auto xl:mx-auto  bg-primary grid grid-cols-1 sm:grid-cols-1 gap-6">
  <div className="p-4 sm:p-6">
    <p className="text-[4vw] sm:text-[45px] text-center text-[#800080]" data-aos="fade-up">
      Experience the Holistic Difference
    </p>
    <p className="text-[14px] sm:text-[15px] mt-5 text-center px-4 sm:px-10">
      Imagine waking up in your own home, bathed in warm sunlight, knowing you have everything you need at your fingertips. 
      A gentle hand to assist you, a kind voice to chat with, and a sense of peace knowing you're surrounded by care 
      that understands your unique needs. We invite you to experience the Holistic difference. Let's sit down together, 
      chat about your hopes and dreams, and craft a personalized care plan that helps you flourish exactly where you want 
      to be – your own home.
    </p>
  </div>
</div>


        {/* Video Section with Overlay */}
        <div className="sm:w-[82%] md:ml-[65px] lg:mx-auto  sm:ml-[130px] mt-[100px]  sm:mt-10 sm:h-[400px]  grid sm:grid-cols-1">
          <div className="relative p-6 sm:p-5 md:p-0">
            <video
              className="object-cover w-full h-[480px]  transition-all duration-500"
              
              
              loop
              controls
            >
              <source src={demo} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div
              className={`absolute inset-0 flex justify-center w-full mr-20 items-center bg-black h-[520px]  z-20 transition-opacity duration-500 ${overlayVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={handleOverlayClick}
            >
              <div className="text-center">
                <p className='text-white text-[50px] mb-4'>Watch This</p>
                <Lottie options={defaultOptions} height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto sm:mt-40 grid sm:grid-cols-1 gap-4 px-4">
  <div className="w-full h-full">
    <h1 className="text-[#800080] text-center text-[20px]  sm:text-[30px] xl:text-[40px] mb-2 font-thin">
      A Gentle Touch for a Golden Age
    </h1>
    <p className="text-center text-[10px] sm:text-base sm:px-10">
      At Holistic Care Services, we understand the importance of familiarity and independence, especially as we age. Imagine waking up in the familiar comfort of your own home, sunlight streaming in, a friendly voice greeting you, and a helping hand nearby. Whether it’s a gentle reminder to take your medication, a cup of tea, and a chat, or personalized attention and companionship from a live-in carer, we are here for you.
    </p>
  </div>

  <div className="w-full h-full">
    <h1 className="text-[#800080] text-center text-[20px]  sm:text-[30px] xl:text-[40px] font-thin">
      Championing Your Independence
    </h1>
    <p className="text-center text-[10px] sm:text-base sm:px-10">
      Many children worry about their parents aging alone. We understand. That’s why we offer a free, no-obligation consultation to discuss your needs and answer any questions you may have. We will come to your home, chat about your hopes and dreams, and create a personalized care plan that allows you to flourish right where you belong.
    </p>
  </div>

  <div className="w-full flex justify-center">
    <img src={aboutussub3} alt="About Us" className="w-full max-w-[550px] h-auto" />
  </div>
</div>

      
        {/* Additional Content */}
        <div className='sm:mt-[300px] xl:mt-10 mt-10'>
          <h1 className='text-center text-sm sm:text-[40px] font-bold text-[#800080] sm:mb-10 mb-5 '>
           <p className='text-[25px] lg:text-[40px]'> Why choose Holistics?</p>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage2} className='w-40 h-40 mb-4'/>
             <p className='text-[#800080]'>We are different</p> 
              <p className='text-sm font-normal p-4 '>
              Our award-winning team is not just about providing care; it's about creating a family atmosphere. Our care professionals are carefully chosen for their warmth, compassion, and dedication. They will become a trusted friend, someone to chat with, share stories with, and even help with those little things that make a big difference
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage1} className='w-40 h-40 mb-4'/>
              <p className='text-[#800080]'>Warm Hands, Kind Hearts</p>
              <p className='text-sm font-normal p-4'>
              We listen to your needs and create a care plan that is unique to you, adapting as your needs change. They will treat you with dignity and become trusted companions, ready to help with daily tasks or simply share a conversation
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage3} className='w-40 h-40 mb-4'/>
             <p className='text-[#800080]'> We are Always Learning</p>
              <p className='text-sm font-normal p-4'>
                We constantly improve our services and knowledge to provide the best possible care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Emailsubscription ref={subscriptionRef}/>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default About;
