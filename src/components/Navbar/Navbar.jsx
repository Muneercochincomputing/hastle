import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiAdminLine } from "react-icons/ri";
import Adminlogin from './Adminlogin';
import { PiDownloadSimpleDuotone } from "react-icons/pi";


const Navbar = ({ onScrollToSubscription }) => {
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    const handleAdminLogin = () => {
        setShowAdminLogin(true);
    };

    const closeAdminLogin = () => {
        setShowAdminLogin(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleMobileServicesDropdown = () => {
        setIsMobileServicesOpen(!isMobileServicesOpen);
    };

    return (
        <div className="relative">
            {/* Navbar Content */}
            <div className={`shadow-md  absolute z-40 w-full opacity-80 ${showAdminLogin && 'filter blur-sm'}`}>
                {/* Upper section for tablets and desktops */}
                <div className="bg-white flex justify-between items-center px-4 py-2 sm:px-8 sm:py-4  lg:flex hidden">
                    {/* Logo */}
                   
    <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center bg-[#7b1e5b]">
        <img 
            src={Logo} 
            alt='logo' 
            className='w-16 h-8 sm:w-40 sm:h-[55px] border-6 border-[#800080] shadow-bulge hover:shadow-xl transition-shadow duration-300 '
        />
    </Link>

                    

                    {/* Navigation Links */}
                    <div className="hidden lg:flex xl:ml-40  gap-4">
                        <Link to='/' className='font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] '>
                            
                            HOME
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500 "></div>
                        </Link>
                        <Link to="/about" className="font-bold text-[#bc3388] text-[17px] group  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                            ABOUT US
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[80px] transition-all duration-500"></div>
                        </Link>

                        {/* OUR SERVICES with Dropdown */}
                        <div className="relative">
                            <button onClick={toggleServicesDropdown} className="font-bold text-[#bc3388] text-[17px] flex items-center  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                OUR SERVICES
                            </button>
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[115px] transition-all duration-500"></div>
                            {isServicesOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-[#bc3388] shadow-md rounded-md py-2 z-50">
                                    <Link to='/service1' className='block px-4 py-2 text-white text-[15px] hover:bg-white hover:text-[#8D4374]'>Daily Support/Visiting Care Services</Link>
              
                                    <Link to='/service3' className='block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#8D4374]'>Live-in Care</Link>
                                    <Link to='/service4' className='block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#8D4374]'>Specialised Care</Link>
                                </div>
                            )}
                        </div>

                        <Link to='/careerspage' className='font-bold text-[#bc3388] text-[17px] group  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                            CAREERS
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[70px] transition-all duration-500"></div>
                        </Link>
                        <Link to='/blog' className='font-bold text-[#bc3388] text-[17px] group  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                            BLOGS
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"></div>
                        </Link>
                        <Link to='/contactpage' className='font-bold text-[#bc3388] text-[17px] group  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                            CONTACT US
                            <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[110px] transition-all duration-500"></div>
                        </Link>
                        <div className='flex ml-2   md:hidden lg:hidden xl:flex border-solid border-[2px] border-white bg-white rounded-full'>     
                           <Link to="/download">
                           
                            <div className=' text-[#bc3388] hover:cursor-pointer font-bold flex  '  > <PiDownloadSimpleDuotone className='ml-12 font-bold' style={{ width: '40px', height: '20px' }} /><p>Download Brochure</p></div>
                       
                            </Link>
                        </div>
                    </div>

                    {/* Subscribe Button */}
                    <button className="group relative min-h-[50px] w-60 overflow-hidden border border-white bg-gradient-to-r from-[#bc3388] to-[#941d67] text-white transition-all duration-300 ease-in-out shadow-lg before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4  before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4  after:duration-500 hover:text-[#8D4374] hover:bg-white hover:before:h-full hover:after:h-full rounded-full"
    onClick={onScrollToSubscription}>
    <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-[#3c112e]">
        Book Your Free Consultation
    </span>
</button>

                </div>

                {/* Mobile Menu for tablets and below */}
                <div className="lg:hidden m-4 flex justify-between items-center px-4 py-2 bg-white shadow-md rounded-full">
                    <Link to="/" className="font-bold text-xl flex items-center bg-[#7b1e5b]">
                        <img src={Logo} alt='logo' className='w-14 h-7' />
                    </Link>

                    <button onClick={toggleMenu} className="text-[#800080]  ">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaCaretDown size={24} />}
                    </button>
                  
                </div>

                {/* Dropdown Menu for tablets and below */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md rounded-xl p-4 mt-2 absolute w-full z-30">
                        <Link to='/' className='block py-2 text-[#8D4374] text-[17px] font-bold'>HOME</Link>
                        <Link to='/about' className='block py-2 text-[#8D4374] text-[17px] font-bold'>ABOUT US</Link>
                        
                        <Link to="/download"> <button  className="block py-2 text-[#8D4374] text-[17px] font-bold">
                        Download Brochure
                    </button></Link>
                    
                        {/* OUR SERVICES with Submenu in Mobile */}
                        <div className="block py-2 text-[#8D4374] text-[17px] font-bold flex justify-between items-center" onClick={toggleMobileServicesDropdown}>
                            OUR SERVICES
                            {isMobileServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {isMobileServicesOpen && (
                            <div className="ml-4">
                                <Link to='/service1' className='block py-2 text-[#8D4374] text-[15px]'>Daily Support/Visiting Care Services</Link>
                                <Link to='/service2' className='block py-2 text-[#8D4374] text-[15px]'>Staying Active & Engaged</Link>
                                <Link to='/service3' className='block py-2 text-[#8D4374] text-[15px]'>Live-in Care</Link>
                                <Link to='/service4' className='block py-2 text-[#8D4374] text-[15px]'>Specialised Care</Link>
                            </div>
                        )}
                        <Link to='/careerspage' className='block py-2 text-[#8D4374] text-[17px] font-bold'>CAREERS</Link>
                        <Link to='/blog' className='block py-2 text-[#8D4374] text-[17px] font-bold'>BLOGS</Link>
                        <Link to='/contactpage' className='block py-2 text-[#8D4374] text-[17px] font-bold'>CONTACT US</Link>
                    </div>
                )}
            </div>

            {/* Admin Login Overlay */}
            {showAdminLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 relative">
                    <div className="bg-white p-8 rounded-lg relative">
                        <button onClick={closeAdminLogin} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                            <FaTimes size={24} />
                        </button>
                        <Adminlogin />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
