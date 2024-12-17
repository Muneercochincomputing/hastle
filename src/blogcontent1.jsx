
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blog4 from './assets/readmoresectionimage1.jpg';
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import Emailsubscription from './components/Navbar/Emailsubscription';
import axios from 'axios';
import Reactloader from './reactloader';

function Blogcontent1() {



  
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
        const result = await axios.get(`${url}/getcms/BlogPage1`);
          console.log(result,'result')
          const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);
        // Extract data for the first section
        const extractedImages = result.data  
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 FirstPart ")
          .map(item => item.images)
          .flat();
           
          console.log(extractedImages,'imagex')

        const extractedText = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 FirstPart ")
          .map(item => item.text)
          .flat();

          console.log(extractedText,'new')
        // Extract data for the second section
        const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 SecondPart ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 SecondPart ")
          .map(item => item.text)
          .flat();
console.log(extractedTextSecond,'The extracted text')
          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 ThirdPart ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 ThirdPart ")
          .map(item => item.text)
          .flat();

          const extractedImagesFourth = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 FourthPart ")
          .map(item => item.images)
          .flat();

        const extractedTextFourth = result.data
          .filter(item => item.page === "BlogPage1" && item.label === "BlogPage1 FourthPart ")
          .map(item => item.text)
          .flat();

          //Read more Blog Items

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

        console.log("First Section Text:", extractedText);
        console.log("Second Section Text:", extractedTextSecond);
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
      title:textBlogSecond[3],
      excerpt: textBlogSecond[4],
      date: textBlogSecond[5],
    
      image: imagesBlogSecond[1],
    },
    {
      title:textBlogSecond[6],
      excerpt: textBlogSecond[7],

      image: imagesBlogSecond[2],
    },
  ];

  return (
    <div>
      <Navbar />
      
      <Reactloader/>
      {/* Hero Section */}
      <header className="relative bg-white text-black py-32">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
          <h1 className="text-5xl md:text-5xl text-[30px] font-extrabold mb-6 ">{textArray[0]}</h1>
          <p className="text-lg md:text-1xl mb-10 text-black">{textArray[1]}</p>
         
           {/* sub head */}
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">{textArray[2]}</h1>
          <p className="text-lg md:text-1xl  text-left text-black">{textArray[3]}</p>
         <div className='grid xl:grid-cols-2'>
         <img src={imagesArraySecond[0]}className='mt-10' />
         <div className='xl:mt-[100px] xl:ml-[100px]'>
         <h1 className="text-2xl md:text-3xl font-extrabold mb-6  text-left text-black mt-10" >{textArraySecond[0]}</h1>
         <p className="text-lg md:text-1xl text-left  text-black">{textArraySecond[1]}</p> 
         </div>
         
         </div>


         <h1 className="text-3xl md:text-2xl font-extrabold mb-6  xl:mt-10  text-left text-black mt-10">{textArrayThird[0]}</h1>
      
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left" >{textArrayThird[1]}</h2>
      <ul class="mt-2 text-gray-700 text-left ">
        <li> {textArrayThird[2]}</li>
       
      </ul>
    </div>
    

</div>
  

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >{textArrayThird[3]}</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>{textArrayThird[4]}</li>
       
      </ul>
    </div>
    

</div>
  
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >{textArrayThird[5]}</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>{textArrayThird[6]}</li>
       
      </ul>
    </div>
    

</div>

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >{textArrayThird[7]}</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>{textArrayThird[8]}</li>
       
      </ul>
    </div>
    

</div>
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >{textArrayThird[9]}</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>{textArrayThird[10]}</li>
       
      </ul>
    </div>
    

</div>


<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10 " >{textArrayThird[11]}</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>{textArrayThird[12]}</li>
       
      </ul>
    </div>
    

</div>

  

          
        </div>
      </header>

      {/* Latest Blogs Heading */}
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
    {posts.map((post, index) => (
      <Link key={index} to={`/blogcontent${index + 2}`}>
        <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{post.date}  </span>
            <h3 className="text-xl font-bold text-[#333] mb-2">{post.title}</h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    ))}
    
    {/* Static Third Blog Post Card */}
    <Link to='/blogcontent4'>
      <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src={imagesBlogThird[0]} alt="Blog Post 1" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">{textBlogThird[0]} </span>
          <h3 className="text-xl font-bold text-[#333]">{textBlogThird[1]}</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">{textBlogThird[2]}</p>
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

export default Blogcontent1;

