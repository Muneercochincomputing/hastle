import React from 'react';
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

import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent5() {


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
      title: "The Importance of Mental Health in Elderly Care",
      excerpt: "Understanding and addressing mental health issues in older adults is crucial for their overall well-being.",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: blog2,
    },
    {
      title: "Creating a Safe Home Environment for Seniors",
      excerpt: "Tips and tricks to make your home a safe haven for elderly family members.",
      date: "June 15, 2024",
      author: "Emily Johnson",
      image: blog3,
    },
  ];

  return (
    <div className='overflow-hidden'>
      <Navbar />
      
      {/* Hero Section */}
     <div className=' grid lg:grid-cols-2 pt-20  '>

     <img src={Blogpage5mainimage} className='rounded-full mt-10  ' />

      {/* Hero Text Section */}
      <div className="sm:max-w-xl xl:w-[1200px] pt-20 text-balance xl:ml-40 px-4 ">
        <h1 className="xl:text-[40px] text-[28px]  font-bold tracking-tight text-gray-900 sm:text-[28px] ">
        How to Prepare Your Home for Elderly Care: Safety Tips and
        Modifications 
        </h1>
        <p className="mt-4 text-xl ml-[2] text-gray-500">
        As the population ages, more families in the UK are choosing to care for their elderly
loved ones at home. While this option allows seniors to remain in familiar surroundings,
it also requires careful planning and modifications to ensure their safety and comfort.
        </p>
       
      </div>
     </div>





       {/* second section */}


       <div className=' grid xl:grid-cols-2 xl:pt-20 '>



 {/* Hero Text Section */}
 <div className="sm:max-w-lg xl:pt-40 pt-10 text-balance xl:ml-10  px-4">
   <h1 className="xl:text-4xl  text-[25px] font-bold tracking-tight text-gray-900 sm:text-[28px] xl:ml-10 ">
   Understanding the Importance of a Safe Home Environment
   </h1>
   <p className="mt-4 text-xl xl:ml-[3rem] text-gray-500">
   Creating a safe and comfortable environment is crucial for elderly care at home. The
home should be a place where seniors feel secure and confident in performing daily
tasks without fear of injury. In the UK, falls are a leading cause of injury among older
adults, with one-third of people aged 65 and over experiencing at least one fall each
year. Many of these falls occur at home, highlighting the need for preventive measures
and home modifications.
   </p>
  
 </div>
 <img src={Blogpage5mainimage} className='rounded-full mt-10' />
</div>





<div className='grid lg:grid-cols-2 mt-20'>
      <img src={blog3pageimage1}/>

      <div className='xl:mt-[50px] xl:ml-[100px] px-4'>
    <h1 className="text-2xl xl:text-2xl font-extrabold mb-6 text-left text-black mt-4">Key Areas to Focus On When Preparing Your Home</h1>
    <p className="text-lg md:text-1xl text-left text-black xl:px-10 px-2  ">Beyond emotional support, pets can also have a positive impact on seniors&#39; physical
   health. Studies have shown that pet owners are more likely to exercise
   regularly, maintain a healthy weight, and have lower blood pressure. Caring for a pet
   can also provide a sense of responsibility and routine, which can be beneficial for both
   mental and physical health.</p> 
  </div>

     </div>
     

     <div className='grid xl:grid-cols-1 mt-10 xl:px-40 px-4'>

      {/* thefirstline */}

      <div className='' > 
        
        {/* the first item */}

        <div className=' ' >

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Entrance and Exits</h1>
    <p className="text-lg md:text-1xl text-left text-black ">The entryway is the first point of contact for anyone entering the home. Ensure
that entrances and exits are accessible and safe for seniors:
o Install sturdy handrails on both sides of any steps leading to the front door.
o Consider adding a ramp if the entrance involves stairs, making it easier for
wheelchair users or those with limited mobility to enter and exit the home.
o Ensure that the door threshold is level with the floor to prevent tripping
hazards.</p> 
        </div>
        

        {/* the second item */}

        <div className=''>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">Flooring and Walkways</h1>
    <p className="text-lg md:text-1xl text-left text-black ">Slippery floors and uneven surfaces can be hazardous for seniors:
o Replace slippery flooring materials, such as polished tiles or hardwood,
with non-slip alternatives like carpet or non-slip vinyl.
o Remove any loose rugs or secure them with non-slip backing to prevent
tripping.
o Ensure that all walkways are clear of clutter, cords, and obstacles that
could cause a fall.</p> 
        </div>
        
        
         </div>
         <div className=' ' >

<h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">Lighting</h1>
<p className="text-lg md:text-1xl text-left text-black ">Proper lighting is essential for preventing accidents and promoting
independence:
o Install bright, energy-efficient lighting throughout the home, especially in
hallways, staircases, and bathrooms.
o Use motion-sensor lights in areas where seniors might need to move
around at night, such as near the bed or bathroom.
o Ensure that light switches are easily accessible and consider adding
nightlights in key areas.</p> 
</div>

<div className=' ' >

<h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black mt-5">Staircases and Hallways</h1>
<p className="text-lg md:text-1xl text-left text-black ">Stairs can be particularly challenging for elderly individuals:
o Install handrails on both sides of the staircase to provide support.
o Ensure that stair treads are even and secure, and consider adding non-
slip strips for extra safety.
o If the staircase poses a significant challenge, consider installing a stairlift
to facilitate safe movement between floors.
o Keep hallways well-lit and free from obstacles.</p> 
</div>
          

     </div>















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
        

        <Link to=
        '/hastle/blogcontent6'>


            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={readmoresectionimage3 } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>

           

              
            </div>

            </Link>

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
        </div>
      </section>
{/* Subscription Section */}
<Emailsubscription/>
    


    

      <Footer />
    </div>
  );
}

export default Blogcontent5;

