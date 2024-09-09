import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import servicehero4 from './assets/privacypolicy.jpg';
 // Assuming this is the correct path

function Privacypolicy() {
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
            Privacy-policies
          </h1>
          <p className="text-lg font-thin text-center">
          A privacy policy is a statement that explains how an organization collects, uses, protects, and shares personal information from users or customers.
          </p>
        </div>
      </div>




      <div className=" xl:hidden lg-hidden ">
        <h1 className="text-5xl text-black mt-10   rounded-full font-thin mb-6 mx-auto text-center ">
        Privacy-policies
          
          <p className="text-lg font-thin   ">
          A privacy policy is a statement that explains how an organization collects, uses, protects, and shares personal information from users or customers.
          </p>
        </h1>
      </div>
  
     

      <header className="relative bg-white text-[#800080] pt-10 pb-10">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">

          <div className='relative xl:mt-[10px] xl:ml-[100px]'>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Privacy & cookie policy</h1>
            <p className="text-lg md:text-1xl text-left text-black">This website has been provided for information regarding Aggregate Holdings Limited t/a Holistic Care Services and their services. The below information sets out how Aggregate Holdings Limited t/a Holistic Care Services uses and protects the data collected via our website. When using our site, you are legally bound to the following privacy policy, so we kindly request you read carefully.
            </p>
          </div>

          <div className='grid xl:grid-cols-1 mt-20'>
            

            <div className='xl:ml-[100px]'>
              <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Information we collect</h1>
              <p className="text-lg md:text-1xl text-left text-black">We offer numerous services which require you supply personal information. For instance, when you contact us, via our website or our chatbot/webchat, we do request for contact details such as your name, email address and telephone number. When register for our newsletter, we will require personal information including your name and email address. Furthermore, when you apply for a job with us, we will request that you share your name, address, email and telephone number so you could be contacted.</p>

              {/* Additional conditions */}
              <div className='xl:mt-[50px]'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">What the information received is used for</h1>
                <p className="text-lg md:text-1xl text-left text-black">What the information received is used for
                </p>
              </div>

              <div className='xl:mt-[50px]'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Securing your data</h1>
                <p className="text-lg md:text-1xl text-left text-black">Aggregate Holdings Limited is committed to ensuring that all personal information collected or received is secure. We follow strict policies and adhere to very high standards of security when gathering your personal information. Different firewall applications have been installed on our website to protect your personal information from being stolen, destroyed or divulged to third parties, unless you have given us your permission for the latter. Your personal information is stored at our restricted office which has no unauthorised access.
                </p>
              </div>

              <div className='xl:mt-[50px]'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Securing your data</h1>
                <p className="text-lg md:text-1xl text-left text-black">Through the use of our contact forms, application forms, and newsletter sign-ups, we may gather, but are not limited to, the following information:<br/>

· Name.<br/>

· Contact information including email address, physical address and phone number.<br/>

· Demographic information such as postcode, preferences and interests.<br/>

· Access to a vehicle.<br/>

· Other information relevant to customer surveys and/or offers.<br/>


                </p>
              </div>


             

              <div className='xl:mt-[50px]'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Information Received</h1>
                <p className="text-lg md:text-1xl text-left text-black">So, we can understand your needs and provide you with a service that suits your needs, we will require the aforementioned information. We may use the information for the following reasons:

· Internal record keeping.

· The improvement of our products and services.

· Using the email address which you have provided, we will periodically send you promotional emails regarding our products, offers or other information that may be of interest to you to customise the website according to your interests.


                </p>
              </div>
            </div>
          </div>

          {/* Additional content sections */}

          <div className='relative xl:mt-[40px] xl:ml-[100px]'>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Our Cookie Policy</h1>
            <p className="text-lg md:text-1xl text-left text-black">Cookies are files which can be placed onto your computer’s hard drive, once permission has been given. There are various benefits to having cookies placed on your hard drive. If you have accepted, cookies are used to identify when you visit a particular site, as well as analyse web traffic. Cookies also facilitate a more personal web experience, allowing web applications to gather information about your personal preferences, and respond to you as an individual.

At Aggregate Holdings Limited, traffic log cookies are used to identify the pages that are being used. From the data provided by these cookies, we can analyse web page traffic and tailor our website to our customer’s needs. This information is only used for the purpose of statistical analysis.

You have the option to either reject or accept cookies. Many web browsers accept cookies. As mentioned, cookies can be rejected within your web browser settings if necessary. However, you will not be able to benefit from the full functionality of the website. By accepting cookies, we can track which pages our visitors find the most useful. This gives us information to be used for a better user experience. We do not have access to your computer, device or any other information about you through the use of cookies.
            </p>
          </div>

          <div className='grid xl:grid-cols-1 mt-20'>
            <div className='xl:mt-[50px] xl:ml-[100px] xl:mr-10'>
              <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Cookies</h1>
              <p className="text-lg md:text-1xl text-left text-black">Our website uses the following cookies:
              </p>

              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Google Analytics:</h1>
                <p className="text-lg md:text-1xl text-left text-black">This cookie allows us to see information on user website activities including, but not limited to page views, source and time spent on website. The information is depersonalised and is displayed as numbers, meaning it cannot be tracked back to individuals. This will help to protect your privacy. By using Google Analytics we can see what content is popular on our website, and strive to give you more of the things you enjoy reading and watching.

Google AdWords: Using Google AdWords code we are able to see which pages helped lead to contact form submissions. This allows us to make better use of our paid search budget.
                </p>
              </div>

              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Facebook Advertising</h1>
                <p className="text-lg md:text-1xl text-left text-black">We use Facebook advertising conversion tracking and re-targeting pixels, which allow us to collect or receive information from your website and elsewhere on the internet and use that information to provide measurement services and targeted advertising.
                </p>
              </div>
              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Visual Web Optimiser (VWO)</h1>
                <p className="text-lg md:text-1xl text-left text-black">Visual Web Optimiser uses cookies to remember the website for which you searched. This helps it generate the required results.
                </p>
              </div>

              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Links to other websites</h1>
                <p className="text-lg md:text-1xl text-left text-black">On our blog we use social sharing buttons for services including, but not limited to, Twitter, LinkedIn, YouTube, Share This, Google+ and Facebook. These allow you to share pages with your family and friends via those platforms. Whilst you will be asked to login to use these services, this process is handled directly with the social sharing providers and their databases and servers. These sites may also monitor your usage of these buttons, through the use of external tracking codes that are required to run the buttons on this website.
                </p>
              </div>
              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Social sharing cookies</h1>
                <p className="text-lg md:text-1xl text-left text-black">This website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over the other websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                </p>
              </div>

              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Links</h1>
                <p className="text-lg md:text-1xl text-left text-black">Hyperlinks on this site may be shortened. The purpose of which is to hide long links for functionality and tracking purposes.
                </p>
              </div>

              <div className='xl:mt-[50px] xl:mr-10'>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Variations to the Policy</h1>
                <p className="text-lg md:text-1xl text-left text-black">We reserve the right to alter and change information provided in this document at our own discretion and therefore this document should be regularly referred to for updates and variations.

If you have any questions regarding this policy, our contact details are as follows:

<span className='font-bold'>Aggregate Holdings Limited t/a Holistic Care Services, Unit A4B, 25 Goodlass Road, Speke, Liverpool, L24 9HJ

0151 665 0520

Registered in England and Wales, Company Number: 11760819</span>

· We will not transfer your information outside the European Economic Area, although we have no control over the route that the data will travel between your computer and our host website.

· Aggregate Holdings Limited will take all reasonable precautions to protect your privacy and we give you an absolute guarantee that we will never send you unsolicited emails (spam) without your permission.

· Please note that we reserve the right to disclose individually identifiable information to comply with requirements of statute and government request or to operate our systems properly and to protect both ourselves and our users.

· If there is any conflict between these terms and specific terms appearing elsewhere on https://holistic-careservices.co.uk/ (including local house rules) then the latter shall prevail.



Home Care Services | Liverpool | Holistic Care Services
Holistic Care Services provides compassionate and highly trained home care staff in Liverpool and the surroundin…

· If any of these terms are determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state or country in which these terms are intended to be effective, then to the extent and within the jurisdiction in which that term is illegal, invalid or unenforceable, it shall be severed and deleted from these terms and the remaining terms shall survive, remain in full force and effect and continue to be binding and enforceable.

· These terms shall be governed by and interpreted in accordance with the laws of England and Wales.
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

export default Privacypolicy;
