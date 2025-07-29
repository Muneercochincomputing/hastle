import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blog4 from './assets/readmoresectionimage1.jpg';
import blog5 from './assets/readmoresectionimage2.jpg';
import blog6 from './assets/readmoresectionimage3.jpg';
import Emailsubscription from './components/Navbar/Emailsubscription';
import axios from 'axios';
import Reactloader from './reactloader';  
import MoreBlogs from './components/MoreBlogs';
import AddBlogs from './components/AddBlogs';
function Blog() {
  const [openIndex, setOpenIndex] = useState(null);



  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  const [imagesArraySecond, setImagesArraySecond] = useState([]);
  const [textArraySecond, setTextArraySecond] = useState([]);
  const [imagesArrayThird, setImagesArrayThird] = useState([]);
  const [textArrayThird, setTextArrayThird] = useState([]);
  const [imagesArrayFourth, setImagesArrayFourth] = useState([]);
  const [textArrayFourth, setTextArrayFourth] = useState([]);

  const url = import.meta.env.VITE_HOST_URL;

  

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/BlogLandingPage`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage")
          .map(item => item.images)
          .flat();
          

        const extractedText = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage ")
          .map(item => item.text)
          .flat();

          console.log(extractedText,'new')
        // Extract data for the second section
        const extractedImagesSecond = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage SecondPart ")
          .map(item => item.images)
          .flat();

        const extractedTextSecond = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage SecondPart ")
          .map(item => item.text)
          .flat();

          const extractedImagesThird = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage ThirdPart ")
          .map(item => item.images)
          .flat();

        const extractedTextThird = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "BlogPage ThirdPart ")
          .map(item => item.text)
          .flat();

          const extractedImagesFourth = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "FourthSection")
          .map(item => item.images)
          .flat();

        const extractedTextFourth = result.data
          .filter(item => item.page === "BlogLandingPage" && item.label === "FourthSection")
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

        console.log("First Section Text:", extractedText);
        console.log("Second Section Text:", extractedTextSecond);
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };

    fetchCMSData();
  }, []); // Dependency array to run only once on mount


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What types of care services do you provide?", answer: `At Holistic Care Services, we offer a wide range of care services tailored to the
needs of the elderly. These include personal care, medication management, meal
preparation, companionship, and assistance with daily activities. We also provide
specialized care for those with dementia or other chronic conditions.` },
    { question: "How do you ensure the quality of care provided to clients?", answer: `We ensure the highest quality of care through our rigorous caregiver selection
process, ongoing training, and regular assessments. Our caregivers are not only highly
qualified but also compassionate and dedicated to providing the best possible care. We
also conduct regular reviews and feedback sessions with clients to continually improve
our services.` },
    { question: "Can I customize the care plan according to my loved one`s needs?", answer: `Absolutely! We believe that every individual has unique needs, which is why
we work closely with you and your loved one to create a personalized care plan. This
plan is regularly reviewed and adjusted as needed to ensure it continues to meet your
loved one’s evolving needs.` },
    { question: "What qualifications do your caregivers have?", answer: `Our caregivers are thoroughly vetted and possess the necessary qualifications
and certifications in elderly care. They undergo comprehensive background checks and
continuous training in areas such as dementia care, first aid, and emergency response,
ensuring they are well-equipped to provide exceptional care.` },
    { question: "How do you handle emergencies?", answer: `Answer: In the event of an emergency, our caregivers are trained to respond promptly
and effectively. They follow established protocols, including contacting emergency
services and notifying family members immediately. Our care plans also include
emergency contact information and procedures tailored to each client’s specific needs.` },
    { question: "How can I get started with Holistic Care Services?", answer: `Getting started is simple. You can contact us via phone, email, or our online
inquiry form to schedule a free consultation. During this consultation, we’ll discuss your
loved one’s needs, answer any questions you may have, and develop a tailored care
plan. From there, we’ll match your loved one with a caregiver who best fits their needs
and preferences.` },
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

  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const moreBlogs = [
    {
      title: 'How to Choose the Right Home Care Service',
      excerpt: 'Tips and advice for selecting the best care for your loved ones.',
      date: '2024-06-01',
      image: blog4,
    },
    {
      title: 'Benefits of Professional Elderly Care',
      excerpt: 'Discover the advantages of hiring professional caregivers.',
      date: '2024-05-20',
      image: blog5,
    },
    {
      title: 'Understanding Dementia Care',
      excerpt: 'A guide to providing compassionate care for dementia patients.',
      date: '2024-05-10',
      image: blog6,
    },
    {
      title: 'Nutrition Tips for Seniors',
      excerpt: 'Healthy eating habits to support senior well-being.',
      date: '2024-04-28',
      image: blog1,
    },
  ];

  return (
    <div>
      <Navbar />

      <Reactloader/>
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-[#8D4374] opacity-75"></div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">{textArray[0]}</h1>
          <p className="text-lg md:text-2xl mb-10">{textArray[1]}</p>
          <a href="#blog-section" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
            Read Our Blogs
          </a>
        </div>
      </header>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
          {textArray[2]}
          <div className='h-10'></div>
          <span className="block w-4/6 h-1  bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>

      {/* Blog Posts Section */}
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
      
      <Emailsubscription/>

      {/* Sub Blogs Section */}
      <div className="bg-white font-[sans-serif] my-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Add any additional content here if needed */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-16 max-md:max-w-lg mx-auto">
            <Link to='/blogcontent4'>
              <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={imagesArrayThird[0]} alt="Blog Post 1" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">{textArrayThird[0]} </span>
                  <h3 className="text-xl font-bold text-[#333]">{textArrayThird[1]}</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">{textArrayThird[2]}</p>
                </div>
              </div>
            </Link>
            <Link to='/blogcontent5'>
              <div className="bg-white cursor-pointer lg:h-[570px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={imagesArrayThird[1]} alt="Blog Post 2" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">{textArrayThird[3]} </span>
                  <h3 className="text-xl font-bold text-[#333]">{textArrayThird[4]}</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">{textArrayThird[5]}</p>
                </div>
              </div>
            </Link>
            <Link to='/blogcontent6'>
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={imagesArrayThird[2]} alt="Blog Post 3" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">{textArrayThird[6]} </span>
                  <h3 className="text-xl font-bold text-[#333]">{textArrayThird[7]}</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">
               {textArrayThird[8]}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Explore More Blogs Button */}
      <div className="flex justify-center my-8">
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
          onClick={() => setShowMoreBlogs(true)}
        >
          Explore More Blogs
        </button>
      </div>

      {/* MoreBlogs Modal */}
      <MoreBlogs show={showMoreBlogs} onClose={() => setShowMoreBlogs(false)} blogs={moreBlogs} />

      



      {/* FAQ Section */}
      <div className="mb-8 lg:mx-40 mx-10 mt-10" >
        <h2 className="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} role="region" aria-labelledby={`faq-${index}`} className='lg:mx-40 mx-10'>
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            id={`faq-${index}`}
          >
            <span className="mr-4">{faq.question}</span>
            <span className="ml-auto">
              {openIndex === index ? (
                <span className="text-lg font-bold">-</span>
              ) : (
                <span className="text-lg font-bold">+</span>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="py-4">
              <p className="text-sm text-gray-800">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Blog;
