import React, { useState,forwardRef } from 'react';
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import contactimage from '../../assets/contactformlast.png'
import axios from 'axios';

const ContactSectionpage = forwardRef((props, ref) => {
  const [fullname ,setFullname] = useState("");
  const [email ,setEmail] = useState("");
  const [street ,setStreet] = useState("");
  const [city ,setCity] = useState("");  
  const [postalcode ,setPostalcode] = useState("");
  const [phonenumber ,setPhonenumber] = useState("");
  const [message ,setMessages] = useState("");
  const [errors, setErrors] = useState({});  


  const handleValidation = () => {
    const newErrors = {};

    if (!fullname) newErrors.fullname = true;
    if (!street) newErrors.street = true;
    if (!city) newErrors.city = true;
    if (!postalcode) newErrors.postcode = true;
    if (!phonenumber) newErrors.phoneNumber = true;
    if (!email) newErrors.email = true;
    if (!message) newErrors.message = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submits = async ()=>{
    
    if (handleValidation()) {
      // Handle the form submission
      const contact = {
        fullname:fullname,
        street:street,
        city:city,
        postalcode:postalcode,
        phonenumber:phonenumber,
        email:email,
        message:message
      }
     
  
      try {
        await axios.post("http://localhost:8082/contacts/", contact);
        console.log("Success");
  
        setFullname("");
        setStreet("");
        setCity("");
        setPostalcode("");
        setPhonenumber("");
        setEmail("");
        setMessages("");
  
        alert("contact submitted successfully")
      } catch (error) {
        console.error("Error contact submission try  later:", error);
      }
  
    } else {
      alert('Please fill in all the fields.');
    }
   
   
  }

  return (
    <div className='relative  mt-10 mb-10' >
     
      <div></div>

    

      <div className="grid lg:grid-cols-2  :gap-16 md:grid-cols-1  h-[600px]  items-center lg:mb-10 lg:h-[600px] md:h-[1200px] overflow-hidden pr-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-w-6xl mx-auto sm:mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:h-full  max-md:before:hidden max-md:pr-0 max-md:shadow-none max-md:mx-4 max-md:h-auto max-md:gap-8"  ref={ref}>
      <div className="rounded-3xl lg:flex overflow-hidden h-[300px] md:h-[500px] xl:ml-[]  x:lh-[800px] lg:h-[800px]  relative">
  <img 
    src={contactimage} 
    className="
      absolute 
      left-0 
      top-0 
      w-[700px] 
      h-full 
      object-cover
      xl:h-[730px]
      max-md:w-full 
      max-md:h-auto"
    alt="Contact"
  />
</div>

        <div className='text-center  md:ml-20 lg:text-left max-md:w-full  lg:absolute  lg:ml-[590px] md:mr-10 '>
          <h2 className="text-gray-800 text-2xl font-bold  lg:ml-[180px]  max-md:ml-0  md:mb-1  xl:mt-10 ">CONTACT US</h2>
          <form className=' ml-1 '>
            <div className="space-y-4 ">
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setFullname(e.target.value);
                  setErrors((prev) => ({ ...prev, fullname: false }));
                }}/>
            <input
  type="text"
  placeholder="Street"
  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
  onChange={(e) => {
    setStreet(e.target.value);
    setErrors((prev) => ({ ...prev, street: false }));
  }}
/>

              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                  onChange={(e) => {
                    setCity(e.target.value);
                    setErrors((prev) => ({ ...prev, city: false }));
                  }}/>
                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                  onChange={(e) => {
                    setPostalcode(e.target.value);
                    setErrors((prev) => ({ ...prev, postcode: false }));
                  }} />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                  setErrors((prev) => ({ ...prev, phoneNumber: false }));
                }}/>
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: false }));
                }}/>
              <div>
              <textarea
                placeholder="Write Message"
                className="px-2 pt-3  z-20 lg:absolute mb-10  w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setMessages(e.target.value);
                  setErrors((prev) => ({ ...prev, message: false }));
                }}/>              </div>
             
            </div>

            <button
              type="button"
              className="mt-8 lg:mt-20 lg:absolute lg:z-10 hover:text-[#800080] hover:border-[#800080] border-solid border-[2px] flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#800080] hover:bg-white text-white"
            onClick={()=>{
              submits()
            }} ><BsFillSendFill className='mr-5 hover:text-[#800080] '  />
              Send Message
            </button>
          </form>


          <ul className="lg:mt-[150px]  md:ml-20 lg:ml-10 flex flex-wrap justify-center md:justify-start gap-2  mb-5 mt-5">
            <li className="flex items-center text-black">
              <MdOutgoingMail />
              <a href="javascript:void(0)" className="text-sm ml-4">
                <strong>info@holistic-careservices.co.uk</strong>
              </a>
            </li>
            <li className="flex items-center text-black">
              <MdOutlinePhoneForwarded />
              <a href="" className="text-sm ml-4 ">
                <strong>44 123 456 7890</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-[100%] h-[500px]   md:mx-0 max-md:w-full max-md:h-[300px] '>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.410717585168!2d-2.8721811!3d53.3538041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae196e48c384f%3A0x4d450bcfb457f810!2sHolistic%20Care%20Services!5e0!3m2!1sen!2sin!4v1723283657434!5m2!1sen!2sin"
          className=" top-0 left-0 w-[80%] h-[500px] border-0 xl:ml-[150px] md:ml-[80px] max-md:w-full max-md:h-[300px] max-md:ml-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
})

export default ContactSectionpage;

