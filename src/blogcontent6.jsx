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
import blogimagespage4 from './assets/blogimagesp4image.jpg'
import blogimage2page4 from './assets/blogimages4image2.jpg'
import blogimage3page4 from './assets/blogpage4image3.jpg'
import Blogpage4 from './assets/blogpage4image.jpg'
import Blogpage4main from './assets/blog4pagemain.jpg'
import Blogpage5mainimage from './assets/blogpage5mainimage.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Reactloader from './reactloader';

import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent6() {


  
  
  
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
        const result = await axios.get(`${url}/getcms/BlogPage6`);
        const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 FirstPart  ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 FirstPart  ")
          .map(item => item.text)
          .flat();

          const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 SecondPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 SecondPart  ")
          .map(item => item.text)
          .flat();


          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 ThirdPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogPage6" && item.label === "BlogPage6 ThirdPart  ")
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
          title: textArraySecond[0],
          excerpt: textArraySecond[1],
          date: textArraySecond[2],
          author: "",
          image: imagesArraySecond[0],
        },
        {
          title: textArraySecond[3],
          excerpt: textArraySecond[4],
          date:textArraySecond[5],
          author: "",
          image: imagesArraySecond[1],
        },
        {
          title: textArraySecond[6],
          excerpt: textArraySecond[7],
          date: textArraySecond[8],
          author: "",
          image: imagesArraySecond[2],
        },
      ];
    
  return (
    <div>
      <Navbar />
      
    <Reactloader/>


      <header className="relative bg-white text-[#8D4374]  pt-40  pb-10  ">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
        
           {/* sub head */}
         
           <div className='relative grid xl:grid-cols-1'>
  <p className='  text-black text-[25px] xl:text-[45px] font-bold '>
  {textArray[0]}
  </p>
  <p className="text-lg md:text-1xl xl:text-left text-black mt-10  xl:px-10">{textArray[1]}</p> 
  <img src={imagesArray[0] } className='mt-10 '  />
  <div className='xl:mt-[100px] xl:ml-[100px]'>
    
    
  </div>
</div>

<div className=' relative xl:mt-[10px] xl:ml-[100px] mt-4'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black ">{textArraySecond[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[1]}</p> 
  </div>

     

     {/* content sections */}


     <div className='grid xl:grid-cols-2 mt-20 '>
      <img src={imagesArraySecond[0]}/>

      <div className='xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black "> {textArraySecond[3]}</p> 


{/* // the second */}
<div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[4]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[5]}</p> 
  </div>



  {/* the third one  */}


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[6]} </h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[7]}</p> 
  </div>


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[8]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[9]}</p> 
  </div>


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[10]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[11]}</p> 
  </div>



  </div>


  {/* // the second */}

  

     </div>
     
    



    {/* second sub header content */}


    <div className=' relative xl:mt-[40px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black ">{textArrayThird[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[1]}</p> 
  </div>



    <div className='grid xl:grid-cols-2 mt-20'>
   

      <div className='xl:mt-[50px] xl:ml-[100px] xl:mr-10'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArrayThird[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black "> {textArrayThird[3]}</p> 


{/* // the second */}
<div className='xl:mt-[50px] xl:mr-10 '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayThird[4]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[5]}</p> 
  </div>



  {/* the third one  */}


  <div className='xl:mt-[50px] xl:mr-10 '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayThird[6]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[7]}</p> 
  </div>



 







  </div>



  <img src={imagesArrayThird[0]} className='mt-4'/>

  {/* // the second */}

  

     </div>
     

      
          
        </div>



  {/* the third list items */}




  {/* // the second */}

  

     
     
    



    {/* second sub header content */}


   

      </header>
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
           READ MORE
          <div className='h-10'></div>
          <span className="block w-5/6 h-1  bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>


      {/* Latest Blogs Heading */}
    
          
      <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
              <Link to={`/blogcontent${index + 1}`}>
                <div className=" bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" />
                <div className=" bottom-0 p-6">
                  <h2 className="text-2xl font-bold text-black mb-2 transition duration-300 group-hover:text-yellow-400">{post.title}</h2>
                  <p className="text-gray-300 text-sm">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    
                    <p>{post.date}</p>
                  </div>
                </div>
              </Link> 
            </article>
          ))}
        </div>
      </section>
      








      
          
      










        {/* Blog Posts Section */}
        
       
{/* Subscription Section */}
<Emailsubscription/>
    


    

      <Footer />
    </div>
  );
}

export default Blogcontent6;

