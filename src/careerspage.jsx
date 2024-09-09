import React, { useState,useRef } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer } from '@react-pdf-viewer/core';
import muneerpdf from './assets/muneer@gmail.com.pdf'
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import careersimage from './assets/aboutimage1.jpeg'
import bannerimage from './assets/image3.jpeg'
import formimage from './assets/servicemain1.jpeg'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pdf } from '@react-pdf/renderer';
import axios from 'axios';
import Sidebar from './components/Navbar/sidebar';




function Careerspage() {
    const [name,setName]= useState(null)
    const [email,setemail]= useState(null)
    const [phonenumber,setphonenumber]= useState(null)
    const [experience,setexperience]= useState(null)
    const [message,setmessage]= useState(null)
    const [pdfFile, setPdfFile] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [errors, setErrors] = useState({}); 

    const subscriptionRef = useRef(null);

    const handleValidation = () => {
      const newErrors = {};
    
      if (!name) newErrors.fullname = 'Name is required';
      if (!email) newErrors.email = 'Email is required';
      else if (!email.endsWith('@gmail.com')) newErrors.email = 'Please enter a valid Gmail ID';
      if (!phonenumber) newErrors.phonenumber = 'Phone number is required';
      if (!experience) newErrors.experience = 'Experience is required';
      if (!message) newErrors.message = 'Message is required';
    
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        setPdfFile(file);
      } else {
        setPdfFile(null);
        alert('Please select a valid PDF file');
      }
    };
    
    


    const careersubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
    
      // Validate form fields
      if (!handleValidation()) {
        alert("Please fill in all inputs correctly.");
        return;
      }
    
      const careers = {
        name,
        email,
        phonenumber,
        experiences: experience,
        message,
      };
    
      const formData = new FormData();
      formData.append("email", email);
      if (pdfFile) formData.append("file", pdfFile);
    
      try {
        // Submit career details
        await axios.post("http://localhost:8082/careers/", careers);
        console.log("Career details submitted successfully");
    
        // Upload the resume if a file is present
        if (pdfFile) {
          await axios.post("http://localhost:8082/careers/upload-file/", formData);
          console.log("Resume uploaded successfully");
       
       
       
        }


          // Clear the form inputs

        setName(null);
        setemail(null);
        setphonenumber(null);
        setexperience(null);
        setmessage(null);
        setPdfFile(null);
    
      
       
    
        alert("Submitted successfully");
      } catch (error) {
        console.error("Error during submission, please try again later:", error);
        alert("Submission failed, please try again later.");
      }
    };

   
  

    const handleScrollToSubscription = () => {
   
      if (subscriptionRef.current) {
        subscriptionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
      
  
  return (
   
    <div >
         <Navbar /> 
            
         <div>
   
     
        <div className="relative h-[600px]    w-full bg-white shadow-bulge rounded-b-[150px] overflow-hidden">
  <img 
    src={careersimage} 
    alt="Careers" 
    className="h-full w-full object-cover " 
  />
  <div className='bg-black/60 inset-0 absolute z-5 '></div>
  <div className="absolute inset-0 justify-center items-center  grid xl:grid-cols-2 z-10 ">
    <div className="xl:w-[800px] xl:mt-[300px]   xl:h-[200px] xl:bg-[#800080]/70 justify-center items-center" data-aos='fade-left'>
      <h1 className="text-white xl:text-[60px] text-[30px] mt-2 font-light text-center flex justify-center items-center ">
        Join Our Team
      </h1>
      <p className='text-white text-center font-light text-[16px] mt-2'>Make a meaningful impact in the lives of our elderly community</p>
      
    </div>
   
    <div className="absolute  right-0 xl:flex justify-end items-center xl:w-[400px] xl:h-[400px] hidden ">
  <div className="relative flex xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden xl:p-[5px]">
    <div className="absolute inset-0  rounded-full bg-[conic-gradient(#800080,transparent_120deg)] animate-rotate"></div>
    <div className="relative z-10 flex rounded-full bg-[] ">
      <img src={careersimage} className="object-cover p-2 rounded-full w-full h-full" alt="Careers"/>
    </div>
  </div>
</div>


    
  </div>
</div>


<p className='xl:px-40 px-4 text-center font-light mt-10 text xl:text-[20px]'>As a member of our dedicated team, you will contribute to creating a nurturing and enriching environment, where your commitment to providing exceptional care will help foster a sense of community and belonging for each of our senior residents</p>

 {/* Join Us Banner */}
<div class="bg-gray-50 mt-20 font-[sans-serif] relative mb-10 max-w-6xl shadow-lg h-[500px] w-full shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
  <div class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 lg-grid-cols-2 gap-6">
    <div class="text-center p-6 flex flex-col justify-center items-center">
      <h3 class="font-light text-3xl sm:text-4xl md:text-5xl text-[#800080] leading-tight">
        <span class="text-gray-800">Become a Valued Member of Our </span> Team
      </h3>
      <h6 class="text-sm sm:text-base md:text-lg text-gray-800 mt-4">
        Embrace the chance to be part of a meaningful mission, where your efforts will directly impact the quality of life for our cherished residents, helping them to live with joy, respect, and the highest standard of care.
      </h6>

      <button type="button" class="bg-[#4e0083] hover:bg-[#4f0083cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
      onClick={handleScrollToSubscription}>
        Get Started
      </button>

      <ul class="flex flex-wrap justify-center gap-6 mt-8">
        <li class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#4e0083' viewBox="0 0 482.6 482.6">
            <path d="..." />
          </svg>
          <a href="javascript:void(0)" class="text-[#4e0083] text-sm lg:ml-2 mr-[18px] lg:mr-0">  0151 665 0520</a>
        </li>
        <li class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#4e0083' viewBox="0 0 479.058 479.058">
            <path d="..." />
          </svg>
          <a href="javascript:void(0)" class="text-[#4e0083] text-sm lg:ml-2 smr-[308px]  lg:mr-0"> office@holistic-careservices.co.uk</a>
        </li>
      </ul>
     
    </div>
    <div className='w-full h-[200px] xl:hidden sm:flex bg-[#800080] bottom-0  ml-[-50%] rounded-t-[100%] bg-gradient-to-b from-[#796089] via-[#800080] to-[#800080]"'></div>
    <div class="hidden xl:flex lg:flex justify-center sm:justify-end items-center p-2 bg-gradient-to-b from-[#800080] to-[#796089] rounded-bl-[150px] sm:rounded-bl-[230px] w-full h-full">
      <div class="h-52 w-52 sm:h-72 sm:w-72 rounded-full bg-gradient-to-tr from-[#800080] to-[#c19ed6] p-5">
        <img src={bannerimage} class="w-full h-full rounded-full object-cover border-8 border-white" alt="img" />
      </div>
    </div>
  </div>

  <div class="absolute -top-[50px] -left-[50px] w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
  <div class="absolute -top-10 -left-10 w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
</div>

     {/* Job submission form */}
    
</div>
    <div className='w-full h-auto' ref={subscriptionRef}>
    <div class="font-[sans-serif]">
      <div class="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src={formimage} alt="Banner Image" class="w-full h-full object-cover" />
      </div>

      <div class="-mt-28 mb-6  w-full px-4">
        <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 class="text-xl text-gray-800 font-bold">Apply to joint with us</h2>

          <form class="mt-8 grid sm:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Name</label>
              <input type='text' placeholder='Enter Name'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]" 
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: false }));
                }}/>
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Email</label>
              <input type='email' placeholder='Email'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]"
                onChange={(e) => {
                  setemail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: false }));
                }} />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Number</label>
              <input type='number' placeholder='Phone No.'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]" 
                onChange={(e) => {
                  setphonenumber(e.target.value);
                  setErrors((prev) => ({ ...prev, phonenumber: false }));
                }}/>
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">experience</label>
              <input type='number' placeholder='experience in years'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]"
                onChange={(e) => {
                  setexperience(e.target.value);
                  setErrors((prev) => ({ ...prev, experience: false }));
                }} />
            </div>
            
           
            <div class="col-span-full">
              <label class="text-gray-800 text-sm block mb-2">Message</label>
              <textarea placeholder='Message' rows="6"
                class="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#800080]"
                onChange={(e) => {
                  setmessage(e.target.value);
                  setErrors((prev) => ({ ...prev, message: false }));
                }}></textarea>
            </div>

           {/* resume upload */}

           <div className="col-span-full xl:hidden flex flex-col items-center">
  <label className="text-gray-800 text-sm block mb-2">Message</label>
  <label className="text-gray-800 text-sm block mb-2">CV</label>
  <label
    htmlFor="uploadFile1"
    className="flex bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]  items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-white inline" viewBox="0 0 32 32">
      <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
      <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
    </svg>
    {pdfFile ? <p className='w-[200px]'>{pdfFile.name}</p> : <p>Upload Resume</p>}
    <input
      type="file"
      id="uploadFile1"
      className="hidden"
      onChange={handleFileChange}
      accept=".pdf"
    />
  </label>
</div>

{/* desktop */}

<div className="col-span-full hidden xl:block">
  <label className="text-gray-800 text-sm block mb-2">CV</label>
  <label
    htmlFor="uploadFile1"
    className="bg-white text-center rounded w-full max-w-sm min-h-[180px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mb-3 fill-gray-400" viewBox="0 0 24 24">
      <path d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z" />
      <path d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z" />
    </svg>
    <p className="text-gray-400 font-semibold text-sm">
      <span className="text-[#007bff]">Choose file</span> to upload
    </p>
    <input
      type="file"
      id="uploadFile1"
      className="hidden"
      onChange={handleFileChange}
      accept=".pdf"
    />
    <p className="text-xs text-gray-400 mt-2">PDF only allowed.</p>
  </label>

  {/* PDF Viewer */}
  {pdfFile && (
    <div className='xl:h-[100vh] mt-[100px]'>
      <iframe
        src={URL.createObjectURL(pdfFile)}
        type="application/pdf"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="PDF Viewer"
      >
        <p>Alternative text - include a link <a href={URL.createObjectURL(pdfFile)}>to the PDF!</a></p>
      </iframe>
    </div>
  )}
</div>

      




            <div class="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox"
                class="w-4 h-4 mr-3 shrink-0" />
              <label for="checkbox1" class="text-sm text-gray-500">I agree to the <a href="javascript:void(0);" class="underline"></a>  <Link to='/hastle/privacypolicy' class="underline">Privacy Policy</Link></label>
            </div>
              <div>
              <button type='button'
            
              class="text-white w-max bg-[#800080] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
              onClick={careersubmit}>
             
              submit
            </button>
            <a href='#' className='ml-2'>
            <button type='button'
            
              class="text-white w-max bg-[#800080] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
              onClick={() => window.location.reload()}>
             
              clear
            </button></a>

              </div>
            
          </form>
        </div>
      </div>
    </div>
    </div>
   
    <Footer/>
    </div>
   
  )
}

export default Careerspage