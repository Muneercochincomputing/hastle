import React from 'react';
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const resturentname = sessionStorage.getItem('resturentname');
  
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col ">
      <div className="flex items-center space-x-2 p-4">
        <BiBookAlt className="text-3xl" />
        <h2 className="text-xl font-semibold">{resturentname}</h2>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded-md">
          <BiHome className="text-xl" />
          <span>Dashboard</span>
        </a>
        <a href="" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded-md">
         <Link to='/contentManage'>
          
          <span>Content Managrment</span>
          </Link>
        </a>
        
      </div>
    </div>
  );
}

export default Sidebar;
