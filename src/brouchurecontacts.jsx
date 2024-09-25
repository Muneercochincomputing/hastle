import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/Navbar/Footer';
import Navbar from './components/Navbar/Navbar';
import imagenew from './assets/contactformlast.png'

function Brouchurecontacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });

  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Validate form fields
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const isPhoneValid = formData.phonenumber.trim().length > 0; // Phone should not be empty
    const isNameValid = formData.name.trim().length > 0; // Name should not be empty

    setIsValid(emailRegex.test(formData.email) && isPhoneValid && isNameValid);
  };

  // Handle input changes and validate form on each change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const localHostUrl = 'http://localhost:8082/data/'; // Local host URL for submission
    const brochureLink = 'https://drive.google.com/file/d/1aKeDJW7ieJN7NtpumL9J1Pkh4NYXszBK/view';
  
    try {
      // Submit the form data to the local host URL
      const response = await axios.post(localHostUrl, formData);
  
      if (response.status === 200) {
        // If submission is successful, trigger download of the brochure directly
        const link = document.createElement('a');
        link.href = brochureLink;
        link.setAttribute('download', 'Holistic_Care_Services_Brochure.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        setErrorMessage('Form submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during submission:', error);
  
      // Enhanced error messages
      if (error.response) {
        setErrorMessage(`Submission failed: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        setErrorMessage('No response received from the server. Please check your connection.');
      } else {
        setErrorMessage(`An error occurred: ${error.message}`);
      }
    }
  };
  
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      <section className="relative flex flex-wrap lg:h-screen lg:items-center pt-[100px]">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
            <p className="mt-4 text-gray-500">
            Download our brochure to discover how our personalized home care services can help you or your loved ones live independently and comfortably.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label htmlFor="phonenumber" className="sr-only">Phone number</label>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter phone number"
                required
              />
            </div>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex items-center justify-between">
              

              <button
                type="submit"
                className={`inline-block rounded-lg px-5 py-3 text-sm font-medium text-white ${isValid ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isValid}
              >
                Download Brochure
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Get Started"
            src={imagenew}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Footer Component */}
      <div className='mt-10'>
      <Footer  className='mt-10'/>
      </div>
     
    </div>
  );
}

export default Brouchurecontacts;
