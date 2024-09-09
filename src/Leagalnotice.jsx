import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import servicehero4 from './assets/leagalnotice.jpg';
 // Assuming this is the correct path

function Leagalnotice() {
  const [activeService, setActiveService] = useState(0);

 
 
  return (
    <div className="p-4 overflow-hidden">
      <Navbar />

      <div className='relative'>
        <div className='mt-20 relative'>
          <img src={servicehero4} alt="Service Hero" className='h-[600px] xl:w-[100%] md:flex lg:flex hidden xl:flex' />
          <img src={servicehero4} alt="Service Hero" className='h-[500px] flex xl:hidden xl:w-[70%] md:hidden xl:ml-60 mx-0' />
        </div>
        <div className="absolute inset-0 hidden xl:flex lg:flex flex-col justify-center items-center z-50 mt-[420px] text-white">
          <h1 className="text-6xl text-white rounded-full font-thin mb-6 text-center ">
            Leagal Notice
          </h1>
          <p className="text-lg font-thin text-center px-10">
          A legal notice is a formal statement that provides important information about legal rights, obligations, and disclaimers, often found on a website to inform users about terms of use, privacy policies, and legal limitations.
          </p>
        </div>
      </div>

  

      <div className=" xl:hidden lg-hidden ml-5">
        <h1 className="text-5xl text-black mt-10   rounded-full font-thin mb-6 mx-auto text-left ">
        Leagal Notice
          
          <p className="text-lg font-thin mt-10  text-left  ">
          A legal notice is a formal statement that provides important information about legal rights, obligations, and disclaimers, often found on a website to inform users about terms of use, privacy policies, and legal limitations.
          </p>
        </h1>
      </div>
     

      <header className="relative bg-white text-[#800080] pt-10 pb-10">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">

          <div className='relative xl:mt-[10px] xl:ml-[100px]'>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Disclaimer</h1>
            <p className="text-lg md:text-1xl text-left text-black">The information contained on this website is for general information purposes only. The information is provided by Aggregate Holdings Limited T/A Holistic Care Services. We endeavour to keep the information up to date and correct, however, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </div>

          <div className='grid xl:grid-cols-1 mt-20'>
            

            <div className='xl:ml-[100px]'>
              <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">External website links</h1>
              <p className="text-lg md:text-1xl text-left text-black">Through this website you are able to link to other websites which are not under the control of Aggregate Holdings Limited. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>

              {/* Additional conditions */}
              <div className='xl:mt-[50px]'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Technical performance</h1>
                <p className="text-lg md:text-1xl text-left text-black">Every effort is made to keep the website up and running smoothly. However, Aggregate Holdings Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                </p>
              </div>

            

          </div>
          </div>


        </div>
      </header>

      <Footer />
    </div>
  );
}

export default Leagalnotice;
