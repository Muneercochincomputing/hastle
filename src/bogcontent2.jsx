import React from 'react';
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

function Blogcontent2() {
  const posts = [
   
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
      <div className='pt-[100px]'>
        <h1 className="xl:text-5xl md:text-5xl font-extrabold mb-6 text-center text-[25px] px-2">Holistic Elderly Care: Nurturing Health, Happiness, and Connection</h1>
        <p className="text-lg md:text-xl mb-10 text-black text-center xl:mx-40 px-2">
  Caring for the elderly requires compassion, knowledge, and thoughtful planning. Our comprehensive guide provides essential tips and strategies to help you deliver the best care for your aging loved ones. Explore our insights and make a positive difference today!
</p>

        <GalleryGrid />
      </div>

      {/* Paragraph */}
      <p className='xl:w-[1200px] mx-auto mb-10 lg:text-lg mt-10 px-4'>
        Elderly care, often referred to as senior care, encompasses a wide range of services designed to meet the unique needs of older adults as they age. This care can range from basic assistance with daily activities, such as bathing, dressing, and meal preparation, to more comprehensive medical care for those with chronic illnesses or cognitive impairments like dementia and Alzheimer's disease. The goal of elderly care is not only to ensure the physical well-being of seniors but also to support their emotional and mental health, providing a sense of dignity and quality of life. It can be provided in various settings, including the senior's home, assisted living facilities, nursing homes, and specialized memory care units. In-home care is often preferred by seniors who wish to maintain independence while still receiving the necessary support. However, as the aging population grows and life expectancy increases, there are ongoing challenges in providing adequate resources, ensuring the availability of trained caregivers, and managing the financial aspects of care. Family members often play a crucial role in providing informal care, which can be both rewarding and demanding, requiring a balance between personal and professional responsibilities. As societies worldwide grapple with the complexities of an aging population, there is an increasing focus on developing sustainable, compassionate, and personalized care solutions that cater to the diverse needs of the elderly.
      </p>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
          READ MORE
        </h2>
        <span className="block w-[200px] mx-auto h-1 mt-4 bg-pink-400 rounded-full"></span>
      </div>

      {/* Blog Posts Section */}
      <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
  <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post, index) => (
      <Link key={index} to={`/hastle/blogcontent${index + 3}`} className="group">
        <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <span className="text-sm block text-gray-400 mb-2">{post.date} | BY {post.author.toUpperCase()}</span>
            <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">{post.title}</h3>
            <hr className="my-6" />
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    ))}

    {/* Fourth Blog Post Card */}
    <Link to="/hastle/blogcontent4" className="group">
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img
          src={readmoresectionimage1}
          alt="A Guide to Igniting Your Imagination"
          className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
        />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
          <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">The Importance of Mental Health Support in Elderly Home Care</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">As we age, maintaining mental health becomes just as important as physical health, especially for seniors receiving care at home. In the UK, there's a growing emphasis on supporting the emotional well-being of older adults to help them maintain their independence and stay connected with loved ones.</p>
        </div>
      </div>
    </Link>

    {/* Fifth Blog Post Card */}
    <Link to="/hastle/blogcontent5" className="group">
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img
          src={readmoresectionimage2}
          alt="Hacks to Supercharge Your Day"
          className="w-full h-60 object-cover transition duration-300 transform group-hover:scale-110"
        />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
          <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-yellow-400">How to Prepare Your Home for Elderly Care: Safety Tips and Modifications</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">As the population ages, more families in the UK are choosing to care for their elderly loved ones at home. While this option allows seniors to remain in familiar surroundings, it also requires careful planning and modifications to ensure their safety and comfort.</p>
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
