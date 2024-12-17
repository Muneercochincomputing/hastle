import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blog3pageimage1 from './assets/blog3pageimage1.jpg'
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import blog3pageimagemain from './assets/oldmanwithadog.jpg'
import readmoresectionimage1 from './assets/readmoresectionimage1.jpg'
import readmoresectionimage2 from './assets/readmoresectionimage2.jpg'
import readmoresectionimage3 from './assets/readmoresectionimage3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Emailsubscription from './components/Navbar/Emailsubscription';
import axios from 'axios';
import Reactloader from './reactloader';

function Blogcontent3() {




  
  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesArraySecond, setImagesArraySecond] = useState([]);
  const [textArraySecond, setTextArraySecond] = useState([]);
  const [imagesArrayThird, setImagesArrayThird] = useState([]);
  const [textArrayThird, setTextArrayThird] = useState([]);
  const [imagesBlogSecond, setImagesBlogSecond] = useState([]);
  const [textBlogSecond, setTextBlogSecond] = useState([])
  const [imagesBlogThird, setImagesBlogThird] = useState([]);
  const [textBlogThird, setTextBlogThird] = useState([])
  
  const url = import.meta.env.VITE_HOST_URL;

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/BlogPage3`);
        const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 FirstPart  ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 FirstPart  ")
          .map(item => item.text)
          .flat();

          const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 SecondPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 SecondPart  ")
          .map(item => item.text)
          .flat();


          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 ThirdPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogPage3" && item.label === "BlogPage3 ThirdPart  ")
          .map(item => item.text)
          .flat();

          const extractedBlogcontent1image = resultBlog.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage SecondPart ")
          .map(item => item.images)
          .flat();
          const extractedBlogcontent1text = resultBlog.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage SecondPart ")
          .map(item => item.text)
          .flat();



          const extractedBlogcontent2image = resultBlog.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage ThirdPart ")
          .map(item => item.images)
          .flat();
          const extractedBlogcontent2text = resultBlog.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage ThirdPart ")
          .map(item => item.text)
          .flat();



        

        // Update state variables
        setImagesArray(extractedImages);
        setTextArray(extractedText);
        setImagesArraySecond(extractedImagesSecond);
        setTextArraySecond(extractedTextSecond);
        setImagesArrayThird(extractedImagesThird);
        setTextArrayThird(extractedTextThird);
        setImagesBlogSecond(extractedBlogcontent1image);
        setTextBlogSecond(extractedBlogcontent1text);
        setImagesBlogThird(extractedBlogcontent2image);
        setTextBlogThird(extractedBlogcontent2text);
       
       
       

    
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };

    fetchCMSData();
  }, []); // Dependency array to run only once on mount






    const services = [
        {
          title: "Web Development",
          description: "Building responsive and dynamic websites.",
          imageUrl: "web-development.jpg",
        },
        {
          title: "Graphic Design",
          description: "Crafting visually stunning designs.",
          imageUrl: "graphic-design.jpg",
        },
        {
          title: "SEO Optimization",
          description: "Improving search engine rankings.",
          imageUrl: "seo-optimization.jpg",
        },
        {
          title: "Digital Marketing",
          description: "Enhancing online presence through strategic marketing.",
          imageUrl: "digital-marketing.jpg",
        },
      ];
      



  const posts = [
  
    {
      title: "The Importance of Mental Health in Elderly Care",
      excerpt: "Understanding and addressing mental health issues in older adults is crucial for their overall well-being.",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: blog2,
    },
    {
      title: "Creating a Safe Home Environment for Seniors",
      excerpt: "Tips and tricks to make your home a safe haven for elderly family members.",
      date: "June 15, 2024",
      author: "Emily Johnson",
      image: blog3,
    },
  ];

  return (
    <div className='overflow-x-hidden'>
      <Navbar />

      <Reactloader/>
      
      {/* Hero Section */}
      <header className="relative bg-white text-[#8D4374]  pt-40 overflow-hidden  ">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
        
           {/* sub head */}
         
           <div className='relative grid xl:grid-cols-1'>
  <p className='  text-black xl:text-[50px] text-[30px] font-bold '>{textArray[0]}</p>
  <p className="text-lg md:text-1xl text-left text-black  xl:px-10 px-4 mt-10">{textArray[1]}</p> 
  <img src={imagesArray[0]} className='mt-10 '  />
  <div className='xl:mt-[100px] ml-[100px]'>
    
    
  </div>
</div>

<div className=' relative xl:mt-[10px] xl:ml-[100px] mt-10'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArraySecond[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[1]}</p> 
  </div>

     

     {/* content sections */}


     <div className='grid xl:grid-cols-2 mt-20'>
      <img src={imagesArraySecond[0]}/>

      <div className='xl:mt-[50px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10">{textArraySecond[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[3]}</p> 
  </div>

     </div>
     

     <div className='grid xl:grid-cols-2 mt-10 '>

      {/* thefirstline */}

      <div className='  border-solid xl:border-[5px] xl:border-black lg:h-[1200px] xl:border-l-0 xl:border-t-0 xl:border-b-0' > 
        
        {/* the first item */}

        <div className='' >

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black ">{textArrayThird[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[1]}</p> 
        </div>
        

        {/* the second item */}

        <div className='xl:mt-[400px]' >

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10">{textArrayThird[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[3]}</p> 
        </div>
        
        
         </div>

             {/* The second line */}
             

         <div className=' lg:h-[1200px]  '  > 
        
         <div className=' lg:ml-10 mt-10 lg:mt-[300px]' >
        <h1 className="text-2xl md:text-3xl font-extrabold lg:mb-6 text-left text-black">{textArrayThird[4]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">
   {textArrayThird[5]}</p> 
        </div>



        {/* the second item */}

        <div className=' lg:ml-10 xl:mt-[300px] mt-10'  >
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArrayThird[6]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">
{textArrayThird[7]}</p> 
        </div>
        
        </div>
         


     </div>











      
          
        </div>
      </header>

      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
           READ MORE
          <div className='h-10'></div>
          <span className="block w-5/6 h-1  bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>



        {/* Blog Posts Section */}
        <Link></Link>
        <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
         <Link to={'/blogcontent4'}>

           
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[0] } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[0]} </span>
                <h3 className="text-xl font-bold text-[#333]">{textBlogThird[1]}</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">{textBlogThird[2]}</p>
              </div>

              

              
            </div>

         </Link>
              <Link to='/blogcontent5'>

            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[1]} alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[3]}</span>
                <h3 className="text-xl font-bold text-[#333]">{textBlogThird[4]}</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">{textBlogThird[5]}</p>
              </div>

             

              
            </div>
            </Link>

            <Link to='/blogcontent6'>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[2]} alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[6]}</span>
                <h3 className="text-xl font-bold text-[#333]">{textBlogThird[7]}</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">{textBlogThird[8]}</p>
              </div>

              

              
            </div>
            </Link>
        </div>
      </section>
{/* Subscription Section */}
<Emailsubscription/>
    

      <Footer />
    </div>
  );
}

export default Blogcontent3;

