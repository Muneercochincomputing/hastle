import React, { useState, useEffect } from 'react';
import Sidebar from './components/Navbar/sidebar';
import Contentheader from './components/Navbar/contentheader';
import CustomChart from './chart';
import { FaPhone, FaRegUser, FaBuffer } from "react-icons/fa";
import axios from 'axios';

function Dashbord() {
  const [queries, setQueries] = useState([]);
  const [careers, setCareers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [queriesResponse, careersResponse, subscribersResponse, contactsResponse] = await Promise.all([
          axios.get('http://localhost:8082/Queries/'),
          axios.get('http://localhost:8082/careers/'),
          axios.get('http://localhost:8082/subscribers/'),
          axios.get('http://localhost:8082/contacts/')
        ]);
        setQueries(queriesResponse.data);
        setCareers(careersResponse.data);
        setSubscribers(subscribersResponse.data);
        setContacts(contactsResponse.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  const sessionId = sessionStorage.getItem('sessionId');

  return (
    <div className={`h-screen overflow-hidden ${sessionId ? 'flex' : 'hidden'}`}>
      {/* Sidebar */}
      <aside className="xl:w-64 bg-gray-800">
        <Sidebar />
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div>
        <Contentheader />
        </div>
       
         <div>
 {/* Banner Section */}
 <div className="bg-gray-800 font-sans min-h-[350px] relative max-w-6xl mx-auto rounded overflow-hidden mt-4">
          <div className="grid lg:grid-cols-2 w-full h-full absolute inset-0">
            <div className="p-4 max-lg:hidden">
              <img src="https://readymadeui.com/image-1.webp" className="object-cover w-full h-full" alt="Banner" />
            </div>
            <div className="flex flex-col items-end justify-center text-right px-8 relative bg-[#800080] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:bg-gradient-to-r from-[#800080] to-primary before:w-2/3 before:rounded-bl-[206px] before:-z-10">
              <h3 className="font-bold sm:text-4xl text-2xl text-yellow-400">Management is doing Things </h3>
              <p className="text-sm text-gray-300 mt-4">Management is doing things right; leadership is doing the right things," highlights the difference between efficiency and effectiveness. While management focuses on executing tasks correctly and following established processes</p>
              <button type="button" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 px-8 font-semibold rounded w-max mt-8">
                Get Started
              </button>
            </div>
          </div>
        </div>





         </div>
       

        {/* Viewer Section */}
        <div className="w-full h-[200px] grid xl:grid-cols-3 xl:px-40 xl:mt-10 gap-6">
          {['+30 views', '+50 Subscripion', '+100 Activities'].map((views, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 w-[200px] shadow-bulge p-[50px] rounded-3xl text-center relative text-[20px] text-primary font-bold">
              <span className="text-green-600 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[-20px] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-[12px]">{views}</span>
              100 Users
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid xl:grid-cols-2 w-full mt-10 px-4 xl:px-0 gap-8">
          {/* Customer Queries Section */}
          {queries.length > 0 && (
            <div className="bg-gradient-to-r text-gray-900 p-6 rounded-lg shadow-xl max-w-2xl w-[80%] h-[40vh] overflow-y-auto mx-auto mb-10 border-l-4 border-purple-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Customer Queries</h2>
              </div>
              <div className="space-y-4">
                {queries.map((query, index) => (
                  <div key={index} className="bg-gray-200 border border-purple-700 rounded-lg p-4 shadow-md h-[200px]">
                   <div className='flex'>
                   <FaRegUser className="text-gray-400 text-2xl mr-4" />
                   <p className="font-semibold ">{query.name}</p>
                   </div>
                    
                    <p className='mt-2'>{query.message}</p>
                    <p className='mt-2'>Phonenumber: {query.phonenumber}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subscribers List Section */}
          {subscribers.length > 0 && (
            <div className="bg-gradient-to-r text-gray-900 p-6 rounded-lg shadow-xl max-w-2xl w-[80%] h-[40vh] overflow-y-auto mx-auto mb-10 border-l-4 border-purple-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Subscribers</h2>
              </div>
              <div className="space-y-4">

                {subscribers.map((subscriber, index) => (
                  
                  <div key={index} className="bg-gray-100 border border-purple-700 rounded-lg p-4 shadow-md">
                    
                    <p className="font-semibold">{subscriber.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Careers Section */}
        <h1 className="text-center xl:text-[30px] mt-10 text-indigo-700 bg-gradient-to-r font-bold">Job Applications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
          {careers.length > 0 ? (
            careers.map((career, index) => (
              <div key={index} className="bg-gradient-to-r shadow-xl rounded-lg p-6 mb-6 mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-md border-t-4 border-indigo-700">
                <div className="flex items-center mb-4">
                  <FaRegUser className="text-[#800080] text-4xl mr-4" />
                  <div>
                    <p className="text-xl font-semibold text-[#800080]">{career.name}</p>
                    <p className="text-sm text-[#800080]">{career.email}</p>
                  </div>
                </div>
                <p className="text-[#800080]">{career.message}</p>
                <div className="mt-4">
                  <p className="text-[#800080] flex"><FaBuffer className='mt-2 mr-2' />experiences: {career.experiences} years</p>
                  <p className="text-[#800080] flex"><FaPhone className='mt-1 mr-2' /> Phone Number: {career.phonenumber} </p>
                </div>
                <div className="text-right">
                  <a href={career.resume}>
                    <button className="bg-white text-[#800080] px-6 py-2 rounded-full hover:bg-purple-200 transition-colors duration-300 shadow-md">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No career applications available</p>
          )}
        </div>

        {/* Full-Width Chart */}
        <div className="mt-10">
          <CustomChart className="w-full h-[500px]" />
        </div>

        {/* Contacts Section */}
        <h1 className="text-center text-3xl font-bold text-[#800080] mt-10">Contact Messages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 p-6">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-xl p-6 mb-8 mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <FaRegUser className="text-[#800080] text-3xl" />
                  </div>
                  <div className="ml-6">
                    <p className="text-2xl font-bold text-white">{contact.fullname}</p>
                    <p className="text-sm text-white opacity-75">{contact.email}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-inner text-gray-800 mb-4">
                  <p><strong>Phone:</strong> {contact.phonenumber}</p>
                  <p><strong>Street:</strong> {contact.street || 'No message provided.'}</p>
                  <p><strong>City:</strong> {contact.city || 'No message provided.'}</p>
                  <p><strong>PostalCode:</strong> {contact.postalcode || 'No message provided.'}</p>
                  <p><strong>Message:</strong> {contact.message || 'No message provided.'}</p>
                </div>
                <div className="text-right">
                  <button className="bg-white text-[#800080] px-6 py-2 rounded-full hover:bg-purple-200 transition-colors duration-300 shadow-md">
                    Reply
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-500">No contact messages found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
