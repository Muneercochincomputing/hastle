import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/blog1.jpeg'
import blog2 from '../../assets/blog2.jpeg'
import blog3 from '../../assets/blog3.jpeg'

function Blog() {
  return (
    <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 ">
  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-[#800080]">Latest From Our Blog</h2>
    <p className="mt-1 text-gray-600 dark:text-neutral-400">

      See how game-changing companies are making the most of every engagement with Preline.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
   
    
   <Link to='/hastle/blogcontent1' className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-[#800080] dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src={blog1} alt="Blog Image"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-[#800080]">
        Caring for the Elderly: A Comprehensive Guide
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400">
        Discover the best care for your loved one by researching personalized services, checking reviews, and consulting trusted healthcare providers
        </p>
        <Link to='/hastle/blogcontent1'  className='text-[#800080] '>Learn more</Link>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
       
        <div>
          <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </Link>
  
   
    <Link to='/hastle/blogcontent2' className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-[#800080] dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src={blog2} alt="Blog Image"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-[#800080]">
        Holistic Elderly Care: Nurturing Health, Happiness, and Connection
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400">
        Caring for the elderly requires compassion, knowledge, and thoughtful planning. Our comprehensive guide provides essential tips and strategies to help you deliver the best care for your aging loved ones. Explore our insights and make a positive difference today!
        </p>
        <Link to='/hastle/blogcontent2' className='text-[#800080] '>Learn more</Link>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
    
        <div>
          <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </Link>
  
    <Link to='/hastle/blogcontent3' className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-[#800080] dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src={blog3} alt="Blog Image"/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-[#800080]">
        Pets as Companions: The Therapeutic Benefits for Seniors
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400">
        Have you ever seen a senior smiling ear-to-ear while petting their furry friend? It’s a heartwarming sight that speaks volumes about the therapeutic benefits of pets for older adults. 
        </p>
        <Link to='/hastle/blogcontent3' className='text-[#800080] '>Learn more</Link>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        
        <div>
          <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </Link>

  </div>

  <div className="mt-12 text-center">
    <Link to='/hastle/blog' className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </Link>
  </div>

</div>

  )
}

export default Blog