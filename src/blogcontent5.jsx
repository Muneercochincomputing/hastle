import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import elderlymentalcareimage1 from './assets/elderlymentalcare2.jpg'
import blog3pageimage1 from './assets/blog3pageimage1.jpg'
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import blog3pageimagemain from './assets/servicepage3mainimage.jpg'
import readmoresectionimage1 from './assets/readmoresectionimage1.jpg'
import readmoresectionimage2 from './assets/readmoresectionimage2.jpg'
import readmoresectionimage3 from './assets/readmoresectionimage3.jpg'
import Blogpage4 from './assets/blogpage4image.jpg'
import Blogpage4main from './assets/blog4pagemain.jpg'
import Blogpage5mainimage from './assets/blogpage5mainimage.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Reactloader from './reactloader';

import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent5() {


  
  
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
        const result = await axios.get(`${url}/getcms/BlogPage5`);
        const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 FirstPart  ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 FirstPart  ")
          .map(item => item.text)
          .flat();

          const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 SecondPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 SecondPart  ")
          .map(item => item.text)
          .flat();


          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 ThirdPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogPage5" && item.label === "BlogPage5 ThirdPart  ")
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
      title: textBlogSecond[0],
      excerpt: textBlogSecond[1],
      date: textBlogSecond[2],
      author: "Jane Smith",
      image: imagesBlogSecond[0],
    },
    {
      title: textBlogSecond[3],
      excerpt: textBlogSecond[4],
      date: textBlogSecond[5],
      author: "Emily Johnson",
      image: imagesBlogSecond[1],
    },
  ];

  return (
    <div className='overflow-hidden'>
      <Navbar />
      
      <Reactloader/>
      {/* Hero Section */}
     <div className=' grid lg:grid-cols-2 pt-20  '>

     <img src={imagesArray[0]} className='rounded-full mt-10  ' />

      {/* Hero Text Section */}
      <div className="sm:max-w-xl xl:w-[1200px] pt-20 text-balance xl:ml-40 px-4 ">
        <h1 className="xl:text-[40px] text-[28px]  font-bold tracking-tight text-gray-900 sm:text-[28px] ">
      {textArray[0]} 
        </h1>
        <p className="mt-4 text-xl ml-[2] xl:ml-[1px] text-gray-500">
      {textArray[1]}
        </p>
       
      </div>
     </div>





       {/* second section */}


       <div className=' grid xl:grid-cols-2 xl:pt-20 '>



 {/* Hero Text Section */}
 <div className="sm:max-w-lg xl:pt-40 pt-10 text-balance xl:ml-10  px-4">
   <h1 className="xl:text-4xl  text-[25px] font-bold tracking-tight text-gray-900 sm:text-[28px] xl:ml-10 ">
 {textArray[2]}
   </h1>
   <p className="mt-4 text-xl xl:ml-[3rem] text-gray-500">
   {textArray[3]}
   </p>
  
 </div>
 <img src={imagesArray[1]} className='rounded-full mt-10' />
</div>





<div className='grid lg:grid-cols-2 mt-20'>
      <img src={imagesArray[2]}/>

      <div className='xl:mt-[50px] xl:ml-[100px] px-4'>
    <h1 className="text-2xl xl:text-2xl font-extrabold mb-6 text-left text-black mt-4">{textArray[4]}</h1>
    <p className="text-lg md:text-1xl text-left text-black xl:px-10 px-2  ">{textArray[5]}</p> 
  </div>

     </div>
     

     <div className='grid xl:grid-cols-1 mt-10 xl:px-40 px-4'>

      {/* thefirstline */}

      <div className='' > 
        
        {/* the first item */}

        <div className=' ' >

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArraySecond[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[1]}</p> 
        </div>
        

        {/* the second item */}

        <div className=''>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">{textArraySecond[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[3]}</p> 
        </div>
        
        
         </div>
         <div className=' ' >

<h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">{textArraySecond[4]}</h1>
<p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[5]}.</p> 
</div>

<div className=' ' >

<h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">{textArraySecond[6]}</h1>
<p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[7]}</p> 
</div>
          

     </div>








     <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
           READ MORE
          <div className='h-10'></div>
          <span className="block w-5/6 h-1  bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>



          
    








      
          
      










        {/* Blog Posts Section */}
        
        <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        

        <Link to=
        '/blogcontent6'>


            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[2] } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[6]}</span>
                <h3 className="text-xl font-bold text-[#333]">{textBlogThird[7]}</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">{textBlogThird[8]}</p>
              </div>

           

              
            </div>

            </Link>

            {posts.map((post, index) => (
      <Link key={index} to={`/blogcontent${index + 2}`}>
        <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{post.date} </span>
            <h3 className="text-xl font-bold text-[#333] mb-2">{post.title}</h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    ))}
        </div>
      </section>
{/* Subscription Section */}
<Emailsubscription/>
    


    

      <Footer />
    </div>
  );
}

export default Blogcontent5;

