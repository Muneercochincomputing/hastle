import React from 'react';
import { useState,useEffect } from 'react';
import photogallary1 from './assets/photogallary1.jpg';
import photogallary2 from './assets/photogallary2.jpg';
import photogallary3 from './assets/photogallary3.jpg';
import photogallary4 from './assets/photogallary4.jpg';
import photogallary5 from './assets/photogallary5.jpg';
import axios from 'axios';

const GalleryGrid = () => {


  const [imagesArray, setImagesArray] = useState([]);
  const [textArray, setTextArray] = useState([]);
  
  const url = import.meta.env.VITE_HOST_URL;

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const result = await axios.get(`${url}/getcms/BlogPage2`);

        // Extract data for the first section
        const extractedImages = result.data
          .filter(item => item.page === "BlogPage2" && item.label === "BlogPage2 SecondPart ")
          .map(item => item.images)
          .flat();

        const extractedText = result.data
          .filter(item => item.page === "BlogPage2" && item.label === "BlogPage2 SecondPart ")
          .map(item => item.text)
          .flat();

        

        // Update state variables
        setImagesArray(extractedImages);
        setTextArray(extractedText);
       

    
      } catch (error) {
        console.error("Error fetching CMS data:", error);
        alert("An error occurred while fetching CMS data. Please try again.");
      }
    };

    fetchCMSData();
  }, []); // Dependency array to run only once on mount





  return (
    <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        <div
          className="relative flex items-end justify-start w-full text-left dark:bg-[#8D4374] bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group"
          style={{ backgroundImage: `url(${imagesArray[0]})` }} // Correct image reference
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:[#8D4374] dark:to-[#8D4374]"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-white dark:bg-violet-600"
            >
              Elderly Care
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-800">
              <span className="text-3xl font-semibold leading-none tracking-wide">31</span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline lg:text-[30px]  lg:font-semibold dark:text-white "
            >
              {textArray[1]}
            </a>
          </h2>
        </div>

        {[
          {
            category: 'Activities',
            date: `${textArray[2]}`,
            title: `${textArray[3]}`,
            imgSrc: imagesArray[1],  // Corrected image source
          },
          {
            category: 'Health',
            date: `${textArray[4]}`,
            title: `${textArray[5]}`,
            imgSrc: imagesArray[2], // Corrected image source
          },
          {
            category: 'Creativity',
            date: `${textArray[6]}`,
            title: `${textArray[7]}`,
            imgSrc: imagesArray[3],  // Corrected image source
          },
          {
            category: 'Engagements',
            date: `${textArray[8]}`,
            title: `${textArray[9]}`,
            imgSrc: imagesArray[4],  // Corrected image source
          },
        ].map((data, index) => (
          <div
            key={index} // Added key prop
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group"
            style={{ backgroundImage: `url(${data.imgSrc})` }} // Corrected image reference
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600"
              >
                {data.category}
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-800">
                <span className="text-3xl font-semibold leading-none tracking-wide">
                  {data.date.split(' ')[0]}
                </span>
                <span className="leading-none uppercase">{data.date.split(' ')[1]}</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline dark:text-white"
              >
                {data.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
