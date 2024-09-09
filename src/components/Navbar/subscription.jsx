import React, { useEffect, forwardRef, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscription = forwardRef((props, ref) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button disable

  const addSubscribers = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) { // Basic email validation
      alert("Please enter a valid email address.");
      return;
    }

    const subscribers = {
      email: email
    };

    try {
      setIsSubmitting(true); // Disable button on submission start
      await axios.post("http://localhost:8082/subscribers/", subscribers);
      console.log("Success");
      setEmail(""); // Clear email after successful submission
      alert("Contact submitted successfully");
    } catch (error) {
      console.error("Error contact submission, try later:", error);
      alert("Error submitting contact, please try later.");
    } finally {
      setIsSubmitting(false); // Re-enable button after submission ends
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className='w-full h-[230px] bg-primary backdrop-blur-sm py-10 mb-20'
      data-aos="fade-right"
      ref={ref}
    >
      <div className='container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-center sm:text-left sm:ml-20 sm:text-4xl font-semibold mb-4 sm:mb-0 text-white'>
            Get in touch with us
          </h1>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <input
              data-aos='fade-up'
              type='text'
              placeholder='Enter your E-mail'
              className='w-full sm:w-[800px] p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
              onChange={(e) => setEmail(e.target.value)}
              value={email} // Ensure input reflects email state
            />
            <button
              onClick={addSubscribers}
             
              className={`mt-4 sm:mt-0 p-2 w-full sm:w-[200px] hover:bg-gray-400 rounded-xl bg-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Subscription;
