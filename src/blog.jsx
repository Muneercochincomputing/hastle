import React, { useState } from 'react';
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

function Blog() {
  const [openIndex, setOpenIndex] = useState(null);

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
      title: "Caring for the Elderly: A Comprehensive Guide",
      excerpt: "To ensure the comfort and well-being of elderly loved ones, prioritize their safety by making their living environment fall-proof and accessible. Regularly monitor their health and nutrition, and provide companionship to combat loneliness and support emotional well-being. Engage them in activities that stimulate their mind and body while respecting their independence and preferences.",
      date: "August 18, 2024",
      author: "John Doe",
      image: blog1,
    },
    {
      title: "Holistic Elderly Care: Nurturing Health, Happiness, and Connection",
      excerpt: "Caring for the elderly requires compassion, knowledge, and thoughtful planning. Our comprehensive guide provides essential tips and strategies to help you deliver the best care for your aging loved ones. Explore our insights and make a positive difference today!",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: blog2,
    },
    {
      title: "Pets as Companions: The Therapeutic Benefits for Seniors",
      excerpt: "Have you ever seen a senior smiling ear-to-ear while petting their furry friend? It’s a heartwarming sight that speaks volumes about the therapeutic benefits of pets for older adults. In this blog post, we’ll dive into the incredible ways that pets can enhance the quality of life for seniors. From offering companionship to reducing feelings of loneliness and anxiety, pets provide a sense of purpose and routine that can be immensely beneficial for mental health. Studies have shown that interacting with pets can lower blood pressure and increase levels of serotonin and dopamine, which promote relaxation and happiness. Moreover, the daily care of a pet encourages physical activity, whether it's a leisurely walk with a dog or playing with a cat at home. Let's explore how the bond between seniors and their pets can foster joy, comfort, and a more fulfilling life..",
      date: "June 15, 2024",
      author: "Emily Johnson",
      image: blog3,
    },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-[#800080] opacity-75"></div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">Explore Our Blog</h1>
          <p className="text-lg md:text-2xl mb-10">Insights, tips, and stories about elderly care, health, and well-being.</p>
          <a href="#blog-section" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
            Read Our Blogs
          </a>
        </div>
      </header>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
          LATEST BLOGS
          <div className='h-10'></div>
          <span className="block w-4/6 h-1  bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>

      {/* Blog Posts Section */}
      <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
              <Link to={`/hastle/blogcontent${index + 1}`}>
                <div className=" bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" />
                <div className=" bottom-0 p-6">
                  <h2 className="text-2xl font-bold text-black mb-2 transition duration-300 group-hover:text-yellow-400">{post.title}</h2>
                  <p className="text-gray-300 text-sm">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    <p>By {post.author}</p>
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
            <Link to='/hastle/blogcontent4'>
              <div className="bg-white cursor-pointer rounded overflow-hidden lg:h-[570px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={blog4} alt="Blog Post 1" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                  <h3 className="text-xl font-bold text-[#333]">The Importance of Mental Health Support in Elderly Home Care</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">As we age, mental health becomes just as crucial as physical health, especially for seniors who receive care at home. In the UK, where elderly home care services are on the rise, there is growing recognition of the need to address the emotional and psychological well-being of older adults. With the right support, seniors can enjoy a higher quality of life, maintain their independence, and stay connected with their loved ones.</p>
                </div>
              </div>
            </Link>
            <Link to='/hastle/blogcontent5'>
              <div className="bg-white cursor-pointer lg:h-[570px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={blog5} alt="Blog Post 2" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                  <h3 className="text-xl font-bold text-[#333]">How to Prepare Your Home for Elderly Care: Safety Tips and Modifications</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">As the population ages, more families in the UK are choosing to care for their elderly loved ones at home. While this option allows seniors to remain in familiar surroundings, it also requires careful planning and modifications to ensure their safety and comfort.</p>
                </div>
              </div>
            </Link>
            <Link to='/hastle/blogcontent6'>
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                <img src={blog6} alt="Blog Post 3" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <span className="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                  <h3 className="text-xl font-bold text-[#333]">Managing Chronic Conditions in Elderly Home Care: A Comprehensive Guide</h3>
                  <hr className="my-6" />
                  <p className="text-gray-400 text-sm">
                  Caring for elderly loved ones at home is rewarding but can be challenging, especially when managing chronic conditions. In the UK, as elderly home care services grow, families and caregivers need the right tools to manage seniors' health, enhancing their quality of life and independence.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

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
