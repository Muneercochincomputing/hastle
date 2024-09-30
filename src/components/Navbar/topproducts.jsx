import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import demo from '../../assets/homeclient.mp4';
import image1 from '../../assets/IMG_5806.jpeg'
import image2 from '../../assets/IMG_5756 .jpg'
import image3 from '../../assets/image3.jpeg'
import image4 from '../../assets/image4.jpeg'
import whyimage1 from '../../assets/charity.png';
import whyimage2 from '../../assets/family.png';
import whyimage3 from '../../assets/friends.png';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import secondbannerimg from '../../assets/IMG_5834.jpg'
import section3bannerimage1 from '../../assets/IMG_5788.jpg'
import section3bannerimage2 from '../../assets/IMG_5926 .jpg'
import section3bannerimage3 from '../../assets/homecarenew.jpeg'
import animationData from '../../animaioplaybutton.json'; 
import Lottie from 'react-lottie';
import Cqc from './cqc';



function Topproducts({onScrollToSubscription}) {



  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-7094940110&data-host=https://www.cqc.org.uk&type=location';
    script.async = true;

    // Append the script to the div where it needs to be injected
    const cqcWidgetDiv = document.getElementById('cqc-widget');
    if (cqcWidgetDiv) {
      cqcWidgetDiv.appendChild(script);
    }
  }, []);

  
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const testimonials = [
    {
      name: "Louise L (Mother of Client)",
      feedback: "Very professional and reliable service from day one. We first had an introduction meeting where all my son's needs were discussed very thoroughly. The support given to my son was reliable and consistent with the same 2 members of staff throughout our time with holistic care.",
      title: "CEO, Company A",
    },
    
    {
      name: "David B (Son of Client)",
      feedback: "The team members built a great relationship with my Dad, and Holistic Care's management team were professional, caring, and showed very good attention to detail. They were great at keeping my Mum informed if changes to the service were expected for whatever reason.",
      title: "CTO, Company B",
    },
  ];
  



    const topprodect = [
        {
            id:1,
            src:image3,
            tittle:'Daily Support/Visiting Care',
            Description: "Empowering families with dedicated visiting care and control over their care journey."
           
        },
        {
            id:1,
            src:image2,
            tittle:'Live-in-Care',
            Description: "Personalized care tailored to each older person's unique needs and situations."
           
        },
        {
            id:1,
            src:image1,
            tittle:'Specialised Care',
            Description: "Expert care for specific conditions—because every individual deserves the right support."
           

           
        }
       
        
    ]
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className='container mt-10  lg:mt-20 pt:10  lg:w-full  '>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[900px] mx-auto '>
          <p data-aos='fade-up' data-aos-delay="200"  className='sm:text-[50px] xl:mt-20 mt-20 text-[30px] text-primary '>
             How We Can Help & Support You
          </p>
          <h1 data-aos='fade-up' data-aos-delay="200" className='text-3xl font-bold '>
       
          </h1>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 hover:text-white  md:gap-10 place-items-center  '>
        {topprodect.map((data, index) => (
          
          
          
    <Link to={`/service${index + 1}`}>
 <div
    key={data.id}
    data-aos={index % 2 === 0 ? 'zoom-left' : 'zoom-right'}
    data-aos-delay='300'
    className='w-full max-w-xs mt-[40px] sm:max-w-sm md:max-w-md bg-white  rounded-2xl  relative shadow-xl p-6 flex flex-col items-center transition-colors translate-x-4 duration-1200 group hover:bg-[#8D4374]  hover:text-white'
 
 >
   
    <img 
      src={data.src} 
      className='w-[500px] h-auto sm:h-[400px]  object-cover rounded-xl block mx-auto transform transition-transform duration-300 group-hover:scale-105' 
      alt={`Product ${data.id}`} 
    />
    <p className=' font-bold text-[20px] group-hover:text-[white]  text-[#8D4374] rounded-xl mb-2 mt-2  '>{data.tittle}</p>
    <p className=' p-2 rounded-xl text-center hover:text-white group-hover:text-[white] text-black' >{data.Description}</p>
   
  </div>
  </Link>
))}

</div>

      </div>
      <div className='w-full  h-[600px] bg-[#a43579] px-10 grid lg:grid-cols-2 lg:mt-10  lg:pt-10 grid-cols-1  mt-10   lg:text-[40px] text-[25px] font-sans lg:pl-40'>
        
          <p className='font-banner text-white  lg:my-[100px ]  mt-10  '>The problem is that finding trustworthy care that truly understands your loved one`s
            unique needs can be overwhelming and stressful
          </p>
        <div className='w-full h-5 lg:hidden'></div>
        <div className='lg:w-[550px] w-full h-[400px] lg:ml-20  lg:my-[70px] m'>
          <img src={secondbannerimg }/>
      
        </div>
        

      </div>

      <div>
        {/* Additional Content */}
        <div className='sm:mt-[200px] lg:mt-10    px-10  '>
          <h1 className='text-center text-sm sm:text-[40px] mt-10  font-bold text-[#8D4374] sm:mb-10 mb-5 '>
           <p className='text-[25px] lg:text-[40px] font-banner'> Getting Started With Holistic Care is Easy</p>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              
             <p className='text-[#8D4374]'>1.Call 0151 665 0520</p> 
              <p className='text-sm font-normal p-4 '>
             We take the time to understand<br/>your loved one's needs, <br/> prefernces, and goals so we can create a <br/>truly personalised care <br/>plan
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
             
              <p className='text-[#8D4374]'>2.Receive Personalised Consultation</p>
              <p className='text-sm font-normal p-4'>
              Our Compassionate Carers provide assistance<br/>with daily tasks, medication management and <br/> companionship,creating independence and <br/> well-being 
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
            
             <p className='text-[#8D4374]'>3.Regain Your Independence</p>
              <p className='text-sm font-normal p-4'>
               With our reliable and transparent<br/>services,you can rest assured what your loved one is <br/>receiving the highest quality care.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-wrap justify-center mx-0 mt-20 hidden ">
  <img src={section3bannerimage2} className="w-[300px] h-[500px] mt-20 shadow-bulge" />
  
  <div className="relative">
  <img src={section3bannerimage1} className="w-[300px] h-[580px] m-2 shadow-bulge" />
  <button
  onClick={onScrollToSubscription}
    className="group absolute rounded-lg bottom-[536px] xl:text-[18px] py-10 px-10 left-10 z-10 h-[50px] w-60 overflow-hidden border border-white bg-gradient-to-r from-[#a43579] to-[#a43579] text-white transition-all duration-300 ease-in-out shadow-lg before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:duration-500 hover:text-[#8D4374] hover:bg-white hover:before:h-full hover:after:h-full flex items-center justify-center"
    
  >
    Book Your Free <br/> Consultation
  </button>
</div>


  <img src={section3bannerimage3} className="w-[300px] h-[500px] mt-20 shadow-bulge" />
</div>










</div>
<div className='bg-[#a43579] py-10 lg:px-10  lg:mt-10  '>
  <div className=' w-full h-[1px] lg:hideden'></div>
<p className=' text-white   xl:text-[30px] font-banner lg:mt-10 lg:text-center text-left  md:mt-20 px-10 lg:my-[100px] bg-[#a43579] lg:px-10  '>Let us help you ensure your loved one ages gracefully, surrounded by the care and support they deserve.With our compassionate care, your loved one can enjoy a fulfilling and dignified life in a warm and supportive environment
</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-8 bg-[#a43579] lg:px-10 ">
     
        {testimonials.length === 2 ? (
          <>
            <div className="p-6 rounded-lg  lg:shadow-lg border-solid lg:border-white lg:border-[5px] lg:border-t-0 lg:border-r-0 lg:border-b-0 hover:shadow-xl transition-shadow duration-300  lg:first-letter md:w-full sm:w-[400px] lg:w-[400px] h-[350px] px-10">
              <p className="text-primary italic text-[15px]">"{testimonials[0].feedback}"</p>
              <h3 className="mt-4 font-bold text-[20px] text-white">{testimonials[0].name}</h3>
            </div>

            {/* Centered div for CQC widget */}
            <div id="cqc-widget" className="flex justify-center items-center ">
              {/* CQC widget will be loaded here */}
            </div>

            <div className="p-6 rounded-lg lg:shadow-lg border-solid lg:border-white lg:border-[5px] lg:border-t-0 lg:border-r-0 lg:border-b-0 hover:shadow-xl transition-shadow duration-300 sm:w-[400px] lg:w-[400px] md:w-full h-[350px] px-10">
              <p className="text-primary italic text-[15px]">"{testimonials[1].feedback}"</p>
              <h3 className="mt-4 font-bold text-[20px] text-white">{testimonials[1].name}</h3>
            </div>
          </>
        ) : (
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg border-solid border-white border-[5px] border-t-0 border-r-0 border-b-0 hover:shadow-xl transition-shadow duration-300 w-[400px] h-[350px]"
            >
              <p className="text-primary italic text-[20px]">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold text-[15px] text-white">{testimonial.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
    <div className="flex justify-center items-center xl:h-[500px] h-[400px]  bg-[#a43579] relative ">
  <video
    id="demoVideo"
    className="object-fill w-[800px] h-[400px] transition-all duration-[0.9s] ease-out"
    muted
    loop
    controls
  >
    <source src={demo} type="video/mp4" />
  </video>

  {/* Pause Button */}
  <button
  onClick={() => {
    const video = document.getElementById("demoVideo");
    const button = document.getElementById("playPauseButton");
    if (video.paused) {
      video.play();
      button.style.display = "none"; // Hide button when video is playing
    } else {
      video.pause();
      button.style.display = "flex"; // Show button when video is paused
    }
  }}
  id="playPauseButton"
  className="absolute w-40 h-40 bg-white bg-opacity-50 rounded-full text-black flex justify-center items-center text-xl"
  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
>
  <Lottie options={defaultOptions} height={200} width={200} />
</button>

</div>


    </div>
  );
}

export default Topproducts;
