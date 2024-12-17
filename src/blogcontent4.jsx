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
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Reactloader from './reactloader';
import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent4() {


  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesArraySecond, setImagesArraySecond] = useState([]);
  const [textArraySecond, setTextArraySecond] = useState([]);
  const [imagesArrayThird, setImagesArrayThird] = useState([]);
  const [textArrayThird, setTextArrayThird] = useState([]);
  const [imagesArrayFourth, setImagesArrayFourth] = useState([]);
  const [textArrayFourth, setTextArrayFourth] = useState([]);
  const [imagesBlogSecond, setImagesBlogSecond] = useState([]);
  const [textBlogSecond, setTextBlogSecond] = useState([])
  const [imagesBlogThird, setImagesBlogThird] = useState([]);
  const [textBlogThird, setTextBlogThird] = useState([])

  const url = import.meta.env.VITE_HOST_URL;
  

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/BlogPage4`);
        const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 FirstPart  ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 FirstPart  ")
          .map(item => item.text)
          .flat();

          const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 SecondPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 SecondPart  ")
          .map(item => item.text)
          .flat();


          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 ThirdPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 ThirdPart  ")
          .map(item => item.text)
          .flat();


          const extractedImagesFourth = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 FourthPart  ")
          .map(item => item.images)
          .flat();

        const extractedTextFourth = result.data
          .filter(item => item.page === "BlogPage4" && item.label === "BlogPage4 FourthPart  ")
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
        setImagesArrayFourth(extractedImagesFourth);
        setTextArrayFourth(extractedTextFourth);
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
    
  ];

  return (
    <div className='overflow-hidden'>
      <Navbar />

      <Reactloader/>
      
      {/* Hero Section */}
      <header className="relative bg-white text-[#8D4374]  pt-40  ">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
        
           {/* sub head */}
         
           <div className='relative grid xl:grid-cols-1'>
  <p className='  text-black xl:text-[45px] text-[25px] font-bold'>{textArray[0]}
  </p>
  <p className="text-lg md:text-1xl text-left text-black  xl:px-10 px-2 mt-10">
{textArray[1]}</p> 
  <img src={imagesArray[0] } className='mt-10 '  />
  <div className='xl:mt-[100px] ml-[100px]'>
    
    
  </div>
</div>

<div className=' relative xl:mt-[10px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10">{textArraySecond[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[1]}</p> 
  </div>

     

     {/* content sections */}


     <div className='grid xl:grid-cols-2  mt-20 '>
      <img src={imagesArraySecond[0]}/>

      <div className=' xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10">{textArraySecond[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[3]}</p> 


{/* // the second */}
<div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArraySecond[4]} </h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[5]}</p> 
  </div>



  {/* the third one  */}


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10">{textArraySecond[6]} </h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[7]}</p> 
  </div>


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4"> {textArraySecond[8]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArraySecond[9]}</p> 
  </div>




  </div>


  {/* // the second */}

  

     </div>
     
    



    {/* second sub header content */}


    <div className=' relative xl:mt-[40px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayThird[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[1]}</p> 
  </div>



    <div className='grid xl:grid-cols-2 mt-20'>
   

      <div className='xl:mt-[50px] xl:ml-[100px] xl:mr-10'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayThird[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[3]}</p> 


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



  <div className='xl:mt-[50px] xl:mr-10 '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-10 lg:ml-1 ">{textArrayThird[8]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayThird[9]}</p> 
  </div>







  </div>



  <img src={imagesArrayThird[0]} className='mt-4'/>

  {/* // the second */}

  

     </div>
     

      
          
        </div>

        <div className=' relative xl:mt-[70px] xl:ml-[150px] px-4  mt-4'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArrayFourth[0]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayFourth[1]}
</p> 
  </div>


  {/* the third list items */}



  <div className='grid xl:grid-cols-2 mt-20'>
      <img src={imagesArrayFourth[0]}/>

      <div className='xl:mt-[50px] xl:ml-[100px] px-4'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayFourth[2]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayFourth[3]}</p> 


{/* // the second */}
<div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayFourth[4]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayFourth[5]}</p> 
  </div>



  {/* the third one  */}


  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayFourth[6]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayFourth[7]}</p> 
  </div>



  <div className='xl:mt-[50px] '>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-4">{textArrayFourth[8]}</h1>
    <p className="text-lg md:text-1xl text-left text-black ">{textArrayFourth[9]}</p> 
  </div>








  </div>


  {/* // the second */}

  

     </div>
     
    



    {/* second sub header content */}


   

      </header>

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
        
              <Link to='/blogcontent5'>

            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[1] } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[3]} </span>
                <h3 className="text-xl font-bold text-[#333]">{textBlogThird[4]}</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">{textArrayThird[5]}</p>
              </div>

              

              
            </div>
            </Link>
             <Link to='/blogcontent6'>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={imagesBlogThird[2]} alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">{textBlogThird[6]} </span>
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
            <span className="text-sm block text-gray-400 mb-2">{post.date} | </span>
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

export default Blogcontent4;

