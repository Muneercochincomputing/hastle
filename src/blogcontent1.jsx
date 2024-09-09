import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/Footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blog4 from './assets/readmoresectionimage1.jpg';
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import Emailsubscription from './components/Navbar/Emailsubscription';

function Blogcontent1() {


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
      title: "Holistic Elderly Care: Nurturing Health, Happiness, and Connection",
      excerpt: "Caring for the elderly requires compassion, knowledge, and thoughtful planning. Our comprehensive guide provides essential tips and strategies to help you deliver the best care for your aging loved ones. Explore our insights and make a positive difference today!",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: blog2,
    },
    {
      title: "Pets as Companions: The Therapeutic Benefits for Seniors",
      excerpt: "Have you ever seen a senior smiling ear-to-ear while petting their furry friend? It’s a heartwarming sight that speaks volumes about the therapeutic benefits of pets for older adults. In this blog post, we’ll dive into the incredible ways that pets can enhance the quality of life for seniors. From offering companionship to reducing feelings of loneliness and anxiety, pets provide a sense of purpose and routine that can be immensely beneficial for mental health. ",
      author: "Emily Johnson",
      image: blog3,
    },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-white text-black py-32">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
          <h1 className="text-5xl md:text-5xl text-[30px] font-extrabold mb-6 ">Caring for the Elderly: A Comprehensive Guide</h1>
          <p className="text-lg md:text-1xl mb-10 text-black">Caring for the elderly requires compassion, knowledge, and a bit of planning. Our comprehensive guide covers essential tips and strategies to help you provide the best care for your aging loved ones.</p>
         
           {/* sub head */}
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Understanding Elderly Care</h1>
          <p className="text-lg md:text-1xl  text-left text-black">Elderly care is a broad term that encompasses various aspects of supporting older adults, from daily activities to medical needs. As people age, they often require more assistance with basic tasks such as bathing, dressing, and eating. Additionally, managing chronic conditions like diabetes or arthritis becomes a part of daily life. Understanding these needs is the first step in providing effective care.</p>
         <div className='grid xl:grid-cols-2'>
         <img src={blogcontentpage1}className='mt-10' />
         <div className='xl:mt-[100px] xl:ml-[100px]'>
         <h1 className="text-2xl md:text-3xl font-extrabold mb-6  text-left text-black mt-10" >Involving Professional Help When Needed</h1>
         <p className="text-lg md:text-1xl text-left  text-black">Sometimes, despite our best efforts, providing care at home may not be enough to meet all the needs of an elderly loved one. In such cases, seeking professional help can be a wise decision. Whether it's hiring an in-home caregiver, exploring adult day care options, or considering assisted living facilities, professional caregivers can provide specialized care that addresses both medical and personal needs. It's important to research and choose services that align with your loved one's preferences and requirements, ensuring they receive the highest standard of care while maintaining their dignity and independence.</p> 
         </div>
         
         </div>


         <h1 className="text-3xl md:text-2xl font-extrabold mb-6  xl:mt-10  text-left text-black mt-10">Essential Tips for Elderly Care</h1>
      
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left" >1.	Health Management</h2>
      <ul class="mt-2 text-gray-700 text-left ">
        <li> Regular medical check-ups are crucial. Keep a detailed record of medications, appointments, and any changes in health.</li>
       
      </ul>
    </div>
    

</div>
  

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >2.	Safety First</h2>
      <ul class="mt-2 text-gray-700 ">
        <li> Ensure the home is safe by installing grab bars, removing trip hazards, and using non-slip mats. Simple modifications can prevent falls, which are a common risk for the elderly.</li>
       
      </ul>
    </div>
    

</div>
  
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >3.	Emotional Support</h2>
      <ul class="mt-2 text-gray-700 ">
        <li> Loneliness and isolation are significant issues. Engage in regular conversations, involve them in family activities.</li>
       
      </ul>
    </div>
    

</div>

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >4.	Nutrition and Hydration</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>: Balanced meals and adequate water intake are vital. Elderly individuals may need dietary adjustments, so consult a nutritionist if necessary</li>
       
      </ul>
    </div>
    

</div>
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >5.	Physical Activity</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>Encourage gentle exercises like walking or stretching. Physical activity helps maintain mobility and improves mood.</li>
       
      </ul>
    </div>
    

</div>


<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10 " >6.	Legal and Financial Planning</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>Assist with organizing legal documents and financial plans. This includes power of attorney, wills, and ensuring that all necessary paperwork is up to date.</li>
       
      </ul>
    </div>
    

</div>

  

          
        </div>
      </header>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
  <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
    READ MORE
    
  </h2>
  <span className="block  w-[200px] ml-[660px] h-1 mt-4 bg-pink-400  rounded-full  bottom-0 "></span>
</div>


{/* Blog Posts Section */}
<section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
  <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post, index) => (
      <Link key={index} to={`/hastle/blogcontent${index + 2}`}>
        <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{post.date} | BY {post.author.toUpperCase()}</span>
            <h3 className="text-xl font-bold text-[#333] mb-2">{post.title}</h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    ))}
    
    {/* Static Third Blog Post Card */}
    <Link to='/hastle/blogcontent4'>
      <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src={blog4} alt="Blog Post 1" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
          <h3 className="text-xl font-bold text-[#333]">Pets as Companions: The Therapeutic Benefits for Seniors</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">Pets provide seniors with companionship, reduce loneliness, and boost mental health by lowering anxiety and increasing happiness. Caring for a pet also promotes physical activity and adds a sense of purpose to daily life.</p>
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

