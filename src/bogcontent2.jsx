import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blogcontentpage1 from './assets/blogcontentpage1.jpg';
import GalleryGrid from './blogsections';
import Emailsubscription from './components/Navbar/Emailsubscription';
import readmoresectionimage1 from './assets/readmoresectionimage1.jpg'
import readmoresectionimage2 from './assets/readmoresectionimage2.jpg'
import readmoresectionimage3 from './assets/readmoresectionimage3.jpg'
import axios from 'axios';
import Reactloader from './reactloader';

function Blogcontent2() {




  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesBlogSecond, setImagesBlogSecond] = useState([]);
  const [textBlogSecond, setTextBlogSecond] = useState([])
  const [imagesBlogThird, setImagesBlogThird] = useState([]);
  const [textBlogThird, setTextBlogThird] = useState([])
  const url = import.meta.env.VITE_HOST_URL;

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/BlogPage2`);

        const resultBlog = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage2" && item.label === "BlogPage2 FirstPart  ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage2" && item.label === "BlogPage2 FirstPart  ")
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










  const posts = [
   
    { title: textBlogSecond[6],
      excerpt: textBlogSecond[7],
      date: textBlogSecond[8],
      author: "",
      image: imagesBlogSecond[2],
    },
  ];

  return (
    <div>
      <Navbar />

      <Reactloader/>
      <div className='pt-[100px]'>
        <h1 className="xl:text-5xl md:text-5xl font-extrabold mb-6 text-center text-[25px] px-2">{textArray[0]}</h1>
        <p className="text-lg md:text-xl mb-10 text-black text-center xl:mx-40 px-2">
        <p dangerouslySetInnerHTML={{ __html: textArray[1] }}></p>
</p>

        <GalleryGrid />
      </div>

      {/* Paragraph */}
      <p className='xl:w-[1200px] mx-auto mb-10 lg:text-lg mt-10 px-4'>
       {textArray[2]}
      </p>

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
      <Link key={index} to={`/blogcontent${index + 3}`} className="group">
        <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{post.date} </span>
            <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">{post.title}</h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    ))}

    {/* Fourth Blog Post Card */}
    <Link to="/blogcontent4" className="group">
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img
          src={imagesBlogThird[0]}
          alt="A Guide to Igniting Your Imagination"
          className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
        />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">{textBlogThird[0]} </span>
          <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">{textBlogThird[1]}</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">{textBlogThird[2]}</p>
        </div>
      </div>
    </Link>

    {/* Fifth Blog Post Card */}
    <Link to="/blogcontent5" className="group">
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img
          src={imagesBlogThird[2]}
          alt="Hacks to Supercharge Your Day"
          className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
        />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">{textBlogThird[3]} </span>
          <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">{textBlogThird[4]}</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">
            {textBlogThird[5]}
          </p>
        </div>
      </div>
    </Link>
  </div>
</section>


      {/* Subscription Section */}
     <Emailsubscription/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Blogcontent2;
