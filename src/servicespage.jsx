import React, { useState } from 'react';
import mainimage1 from './assets/servicemain2.jpg';
import mainhero from './assets/abouthero.jpg'
import mainimage2 from './assets/blog2.jpeg';
import mainimage3 from './assets/blog1.jpeg';
import mainimage4 from './assets/blog2.jpeg';
import servicesmain from './assets/IMG_5788 2.jpg'
import servicelist1 from './assets/serviceslist3.jpeg'
import servicelist2 from './assets/IMG_5827.jpeg'
import servicelist3 from './assets/servicelists2.jpeg'
import servicelist4 from './assets/servicelists3.jpeg'
import servicelist5 from './assets/servicelisst4.jpeg'
import servicelist6 from './assets/absnew.jpeg'
import nutritionimage from './assets/nutritionimage.jpeg'
import hydration from './assets/IMG_5706 .jpg'
import overnightcare from './assets/IMG_5820.jpg'
import overnights from './assets/overnights.jpeg'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import Testimonial from './components/Navbar/Testimonial';
import pngimage from './assets/caring.png'
import pngimage2 from './assets/supportive.png'
import pngimage3 from './assets/proffessional.png'
import heroservices from './assets/IMG_5788 2.jpg'

import Emailsubscription from './components/Navbar/Emailsubscription';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Servicespage() {
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
    <div className="p-4 overflow-hidden">
      <Navbar />

      <div className='relative'>
  <div className='mt-20 relative'>
    <img src={heroservices} className='h-[600px] xl:w-[100%] md:flex lg:flex hidden xl:flex' />
    <img src={servicesmain} className='h-[500px] flex xl:hidden xl:w-[70%] md:hidden xl:ml-60 mx-0' />
  </div>
  <div className="absolute inset-0 hidden xl:flex lg:flex flex-col justify-center items-center z-50 mt-[420px] text-white">
    <h1 className="text-6xl text-white rounded-full font-thin mb-6 text-center ">
      Our Services
    </h1>
    <p className="text-lg font-thin text-center">
      We provide practical support that enables people to live their best life for as long as possible.
    </p>
  </div>
</div>


      
      <div className=" xl:hidden lg-hidden ">
        <h1 className="text-6xl text-black mt-10   rounded-full font-thin mb-6 mx-auto text-center ">
          Our Services
          
          <p className="text-lg font-thin   ">
            We provide practical support that enables people to live their best life for as long as possible.
          </p>
        </h1>
      </div>
      <div ><h1 className='text-center  text-[30px] text-[#8D4374] xl:mt-10 '>Daily Support/Visiting Care Services</h1>
      <p className='text-center mb-10'>We offer a variety of customized visiting care services tailored to provide our clients and their families with the right choices and more possibilities while ensuring they oversee their care</p></div>
      <div className='xl:w-[100%] h-auto xl:h-[2200px] lg-[2200px] bg-gray-300/20 mb-10  pb-10  shadow-xl'>
      <div className='w-full xl:h-[450px]  grid lg:grid-cols-3 md:grid-cols-2 mb-10 '>
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={overnightcare} className='xl:h-[300px] object-fill h-[200px] w-full  xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center
          '>Personal Care</h1>
          <p className='text-center font-light xl:px-2 px-2 pb-8'>We assist with daily activities like bathing, dressing, and grooming to ensure our clients maintain their dignity and well-being.</p>
        </div>
        <div className='w-[80%] xl:h-[95%]  bg-white rounded-3xl border-solid border-[0px] border-black ml-10 mt-10'>
        <img src={servicelist2} className='   xl:h-[300px] object-cover w-full  h-[200px] rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center lg:mt-2
          '>Medication Support</h1>
          <p className='text-center font-light xl:px-2 px-2 pb-8'>Our caregivers help with medication reminders and administration to ensure our clients take their medications on time and safely.</p>
        </div>
        <div className='w-[80%] xl:h-[95%]  bg-white rounded-3xl  border-solid border-[0px] border-black   ml-10 mt-10'>
        <img src={servicelist3} className='xl:h-[300px] h-[200px] w-full object-fill  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] xl-px-10 font-bold text-center
          '>Domestic Assistance/<br/>Household Tasks</h1>
          <p className='text-center font-light xl:px-4 px-2 pb-8'>We provide support with household chores such as cleaning, laundry, and meal preparation to help maintain a clean and comfortable living environment.</p>
        </div>
       
       
      </div>





<div className='w-full xl:h-[400px] grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 lg:ml-26'>
  
<div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={hydration} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center
          '>Nutrition and Hydration</h1>
          <p className='text-center font-light px-4 pb-8'>Led by Dr. Kunbi Taiwo, our team understands the importance of good nutrition and hydration. We assist with meal planning and preparation to ensure our clients receive balanced and healthy meals.</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={overnights} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center
          '>Overnight Care</h1>
          <p className='text-center font-light xl:px-4 px-2 pb-8'>Our team provides support during the night, offering reassurance and assistance to ensure a safe and restful night’s sleep for our clients.</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={servicelist6} className='xl:h-[350px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center
          '>Respite Care</h1>
          <p className='text-center font-light xl:px-4 pb-8 px-2'>We offer temporary relief for primary caregivers, allowing them to rest and recharge while we take care of their loved ones.</p>
        </div>
        <div></div>
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={nutritionimage} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#8D4374] font-bold text-center
          '>Outings & Activities</h1>
          <p className='text-center font-light xl:px-4 pb-8'> Our caregivers assist with social activities, shopping trips, and appointments to keep our clients socially active and engaged.</p>
        </div>

</div>
<div className='w-full xl:px-0 lg:mt-[700px] mt-10'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 xl:gap-6 xl:w-[100%] mx-auto xl:mt-40 xl:mb-20'>
    <div className='flex flex-col items-center'>
      <img src={pngimage} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Caring' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Caring
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={pngimage2} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Supportive' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Supportive
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={pngimage3} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Personalized' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#8D4374] font-bold text-center mt-2'>
        Personalized
      </h1>
    </div>
  </div>
</div>

      </div>

     <Testimonial /> 
     <Emailsubscription/>

      <Footer />
    </div>
  );
}

export default Servicespage;
