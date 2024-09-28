import React from 'react'
import whyimage1 from '../../assets/charity.png';
import whyimage2 from '../../assets/family.png';
import whyimage3 from '../../assets/friends.png';

function Whychooseus() {
  return (
    <div>
        {/* Additional Content */}
        <div className='lg:mt-[300px] xl:mt-10 mt-10'>
          <h1 className='text-center text-sm sm:text-[40px] font-bold text-white sm:mb-10 mb-5 '>
           <p className='text-[25px] lg:text-[40px]'> What sets us apart?</p>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage2} className='w-40 h-40 mb-4'/>
             <p className='text-white'>We are different</p> 
              <p className='text-sm font-normal p-4 text-white '>
              Our award-winning team is not just about providing care; it's about creating a family atmosphere. Our care professionals are carefully chosen for their warmth, compassion, and dedication. They will become a trusted friend, someone to chat with, share stories with, and even help with those little things that make a big difference
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage1} className='w-40 h-40 mb-4'/>
              <p className='text-white'>Warm Hands, Kind Hearts</p>
              <p className='text-sm font-normal p-4 text-white'>
              We listen to your needs and create a care plan that is unique to you, adapting as your needs change. They will treat you with dignity and become trusted companions, ready to help with daily tasks or simply share a conversation
              </p>
            </div>
            <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
              <img src={whyimage3} className='w-40 h-40 mb-4'/>
             <p className='text-white'> We are Always Learning</p>
              <p className='text-sm font-normal p-4 text-white'>
                We constantly improve our services and knowledge to provide the best possible care.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Whychooseus;
