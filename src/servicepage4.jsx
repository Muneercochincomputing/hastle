import React, { useState } from 'react';
import mainimage1 from './assets/servicemain2.jpg';
import mainhero from './assets/abouthero.jpg'
import mainimage2 from './assets/blog2.jpeg';
import mainimage3 from './assets/blog1.jpeg';
import mainimage4 from './assets/blog2.jpeg';
import servicesmain from './assets/servicemain1.jpeg'
import service4image from './assets/Servises4image1.jpg'
import service5image from './assets/Services4image2.jpg'
import service6image from './assets/Servicesimage3.jpg'
import service7image from './assets/Servicesimage4.jpg'
import service8image from './assets/Servicesimage5.jpg'
import service9image from './assets/Serviceimage6.jpg'
import service10image from './assets/Servicesimage7.jpg'
import servicelist6 from './assets/absnew.jpeg'
import nutritionimage from './assets/nutritionimage.jpeg'
import overnightcare from './assets/overnightcare.jpeg'
import overnights from './assets/overnights.jpeg'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer';
import Testimonial from './components/Navbar/Testimonial';
import pngimage from './assets/caring.png'
import pngimage2 from './assets/supportive.png'
import pngimage3 from './assets/proffessional.png'
import servicehero4 from './assets/servicehero4.jpg'
import heroservices from './assets/serviceimagescare.jpeg'
import arthitiscare from './assets/arthitiscare.jpg'
import demservice2 from './assets/demservice2.jpg'
import parkinson from './assets/parkinson.jpg'
import physical from './assets/physicaldisabilities.jpg'
import arthitis from './assets/arthitis.jpg'
import aiimage7 from './assets/aiimage7.png'
import aiimage8 from './assets/aiimage8.png'
import aiimage9 from './assets/aiimage9.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Emailsubscription from './components/Navbar/emailsubscription';

function Servicespage4() {
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
    <img src={servicehero4} className='h-[600px] xl:w-[100%] md:flex lg:flex hidden xl:flex' />
    <img src={servicehero4} className='h-[500px] flex xl:hidden xl:w-[70%] md:hidden xl:ml-60 mx-0' />
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
      <div ><h1 className='text-center  text-[30px] text-[#800080] xl:mt-10 '>Specialised Care</h1>
      <p className='text-center mb-10'> We provide tailored care to meet the unique needs of each individual, shaped by their specific conditions or situations</p></div>
      <div className='xl:w-[100%] h-auto xl:h-[2300px] lg-[2300px] bg-gray-300/20 mb-10  pb-10  shadow-xl'>
      <div className='w-full xl:h-[400px]  grid lg:grid-cols-3 md:grid-cols-2 mb-10 '>
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={service4image} className='xl:h-[300px] object-fill h-[200px] w-full  xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Dementia Care</h1>
          <p className='text-center font-light xl:px-2 px-2 pb-8'>Our caregivers are trained to support clients with dementia, ensuring their safety and comfort</p>
        </div>
        <div className='w-[80%] xl:h-[95%]  bg-white rounded-3xl border-solid border-[0px] border-black ml-10 mt-10'>
        <img src={service10image} className='   xl:h-[300px] object-cover w-full  h-[200px] rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Physical Disabilities Care</h1>
          <p className='text-center font-light xl:px-2 px-2 pb-8'>We provide assistance to clients with physical disabilities to help them maintain their independence and quality of life in socity.</p>
        </div>
        <div className='w-[80%] xl:h-[95%]  bg-white rounded-3xl  border-solid border-[0px] border-black   ml-10 mt-10'>
        <img src={ service6image} className='h-[300px] w-full object-fill  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] xl-px-10 font-bold text-center
          '>Parkinson’s Disease Care</h1>
          <p className='text-center font-light xl:px-4 px-2 pb-8'>Our team offers specialized care for clients with Parkinson’s disease, helping manage symptoms and improve daily living</p>
        </div>
       
       
      </div>
      <div className='w-full xl:px-0'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 xl:gap-6 xl:w-[100%] mx-auto xl:mt-40 xl:mb-20'>
    <div className='flex flex-col items-center'>
      <img src={aiimage7} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Caring' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#800080] font-bold text-center mt-2'>
        Caring
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={aiimage8} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Supportive' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#800080] font-bold text-center mt-2'>
        Supportive
      </h1>
    </div>
    <div className='flex flex-col items-center'>
      <img src={aiimage9} className='w-[100%] xl:h-[450px] sm:w-[70%] md:w-[80%] xl:mt-[28px]' alt='Personalized' />
      <h1 className='text-[16px] sm:text-[18px] md:text-[20px] text-[#800080] font-bold text-center mt-2'>
        Personalized
      </h1>
    </div>
  </div>
</div>





<div className='w-full xl:h-[400px] grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10'>
  
<div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={service8image} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Arthritis Care</h1>
          <p className='text-center font-light px-4 pb-8'>We assist clients with arthritis in managing pain and maintaining mobility through tailored care plans.</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={service9image} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Multiple Sclerosis Care</h1>
          <p className='text-center font-light xl:px-4 pb-8'>Our caregivers provide support for clients with multiple sclerosis, focusing on managing symptoms and improving their quality of life.</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={demservice2 } className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Palliative and End of Life Care</h1>
          <p className='text-center font-light xl:px-4 pb-8'>We offer compassionate care for clients in the final stages of life, ensuring their comfort and dignity</p>
        </div>

</div>






   {/* third set f service data */}

   <div className='w-full xl:h-[400px]  grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:mt-40'>
  
<div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={nutritionimage} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Stroke Care</h1>
          <p className='text-center font-light px-4 pb-8'>Our team provides rehabilitation and support for clients recovering from a stroke, helping them regain their independence.</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={overnights} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Diabetes Care</h1>
          <p className='text-center font-light xl:px-4 pb-8'>We offer assistance with diabetes management, including monitoring blood sugar levels and providing dietary guidance</p>
        </div>
  
        <div className='w-[80%] xl:h-[95%] bg-white rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={servicelist6} className='xl:h-[300px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Rehabilitation Care</h1>
          <p className='text-center font-light xl:px-4 pb-8'>We support clients in their recovery from surgeries or injuries, helping them regain strength and mobility</p>
        </div>

</div>


      </div>
     <Testimonial/> 
    <Emailsubscription/>
      <Footer />
    </div>
  );
}

export default Servicespage4;
