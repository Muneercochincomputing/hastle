import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'
import image4 from '../../assets/image4.jpeg'



function Topproducts() {
    const topprodect = [
        {
            id:1,
            src:image1,
            tittle:'Visiting Services',
            Description: "Assistance with daily activities like bathing, dressing, and grooming."
           
        },
        {
            id:1,
            src:image2,
            tittle:'Medical Care',
            Description: "Skilled nursing care, medication management, and doctor visit assistance."
           
        },
        {
            id:1,
            src:image3,
            tittle:'Companionship',
            Description: "Providing emotional support and companionship to combat loneliness."


           
        },
        {
            id:1,
            src:image4,
            tittle:'Household Assistance',
            Description: "Help with housekeeping, meal preparation, and errands"
           
        }
        
    ]
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className='container '>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' data-aos-delay="200" className='sm:text-[60px] text-[30px] text-primary '>
            Our Services
          </p>
          <h1 data-aos='fade-up' data-aos-delay="200" className='text-3xl font-bold '>
          Comprehensive Home Care Tailored to Your Needs
          </h1>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 hover:text-white  md:gap-10 place-items-center  '>
        {topprodect.map((data, index) => (
          
          
          
    <Link to={`/hastle/service${index + 1}`}>
 <div
    key={data.id}
    data-aos={index % 2 === 0 ? 'zoom-left' : 'zoom-right'}
    data-aos-delay='300'
    className='w-full max-w-xs mt-[40px] sm:max-w-sm md:max-w-md  rounded-2xl  relative shadow-xl p-6 flex flex-col items-center transition-colors translate-x-4 duration-1200 group hover:bg-[#800080] bg-white hover:text-white'
 
 >
   
    <img 
      src={data.src} 
      className='w-[500px] h-auto sm:h-[400px]  object-cover rounded-xl block mx-auto transform transition-transform duration-300 group-hover:scale-105' 
      alt={`Product ${data.id}`} 
    />
    <p className=' font-bold text-[20px] group-hover:text-[white]  text-[#800080] rounded-xl mb-2 mt-2  '>{data.tittle}</p>
    <p className=' p-2 rounded-xl text-center hover:text-white group-hover:text-[white] text-black' >{data.Description}</p>
   
  </div>
  </Link>
))}

</div>

      </div>
    </div>
  );
}

export default Topproducts;
