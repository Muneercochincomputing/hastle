import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Product = ({ pageIdentifier }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = `https://api.homecare.co.uk/assets/js/review_widget_carousel.js?displaydiv=tgrcw_0059ab4d_${pageIdentifier}&displayid=65432232653&displaycount=50&displaylogo=true&displayscore=true&displaybackground=true&displayratingreview=true&displaylink=true&displayminoverallrating=0&linksnofollow=false&displayfontsize=large`;
    script.async = true;
    script.className = 'tg-review-carousel-widget';

    // Append script to body
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
      console.log(`Removing review widget script for ${pageIdentifier}`);
    };
  }, [pageIdentifier]); // Run effect when pageIdentifier changes

  return(
<div className='lg:px-20 lg:py-10 mt-10 lg:mt-[300px] lg:h-[400px] bg-red-500 h-[400px]   '>

<div className="tg-review-carousel-widget-container  shadow-bulge " id={`tgrcw_0059ab4d_${pageIdentifier}`}></div>


</div>

  
  

)};


export default Product;
