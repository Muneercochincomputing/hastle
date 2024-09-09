import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero';
import Product from './components/Navbar/about';
import TopProducts from './components/Navbar/TopProducts';
import Banner from './components/Navbar/bannner';
import Subscription from './components/Navbar/Subscription';
import Testimonial from './components/Navbar/Testimonial';
import Footer from './components/Navbar/Footer';
import AnimatedContainer from './components/Navbar/HoverTest';
import ScrollableContainer from './components/Navbar/HoverTestMobile';
import Blog from './components/Navbar/blog';
import ContactSection from './components/Navbar/contact';
import Training from './components/Navbar/trainingcourosal';
import AnimatedContainerMob from './components/Navbar/HoverTestMobile';
import AnimatedContainerTab from './components/Navbar/hoveresttablets';

function Homepage() {




  const subscriptionRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSubscription = () => {
   
    if (subscriptionRef.current) {
      subscriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
   
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='overflow-hidden'>
      <Navbar onScrollToSubscription={handleScrollToSubscription} />
      <Hero />
      <AnimatedContainer onScrollToSubscription={handleScrollToContact} />
      <AnimatedContainerMob  onScrollToSubscription={handleScrollToContact}  />
      <AnimatedContainerTab />
      <Product />
      <TopProducts />
      <Banner />
      <Training />
      <Blog />
      <Subscription ref={subscriptionRef} />
      <Testimonial />
      <ContactSection  ref={contactRef} />
      <Footer />
    </div>
  );
}

export default Homepage;
