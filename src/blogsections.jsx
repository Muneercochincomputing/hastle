import React from 'react';
import photogallary1 from './assets/photogallary1.jpg';
import photogallary2 from './assets/photogallary2.jpg';
import photogallary3 from './assets/photogallary3.jpg';
import photogallary4 from './assets/photogallary4.jpg';
import photogallary5 from './assets/photogallary5.jpg';

const GalleryGrid = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        <div
          className="relative flex items-end justify-start w-full text-left dark:bg-[#800080] bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group"
          style={{ backgroundImage: `url(${photogallary1})` }} // Correct image reference
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:[#800080] dark:to-[#800080]"></div>
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
              Elderly care involves offering compassionate support and ensuring dignity and respect in every aspect of their daily lives
            </a>
          </h2>
        </div>

        {[
          {
            category: 'Activities',
            date: '04 Aug',
            title: 'Elderly care activities should focus on enhancing well-being through engaging, meaningful interactions and maintaining physical and mental stimulation',
            imgSrc: photogallary2, // Corrected image source
          },
          {
            category: 'Health',
            date: '01 Aug',
            title: 'Maintaining good health in old age involves a balanced diet, regular exercise, and routine medical check-ups to promote longevity and quality of life.',
            imgSrc: photogallary3, // Corrected image source
          },
          {
            category: 'Creativity',
            date: '28 Jul',
            title: 'Creative activities for older adults can stimulate the mind, boost emotional well-being, and provide a sense of accomplishment and joy',
            imgSrc: photogallary4, // Corrected image source
          },
          {
            category: 'Engagements',
            date: '19 Jul',
            title: 'Social engagement in older adults fosters a sense of connection, combats loneliness, and enhances overall well-being.',
            imgSrc: photogallary5, // Corrected image source
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
