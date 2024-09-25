import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // Ensure this component is small or necessary

// Lazy load all the components for code splitting
const Homepage = lazy(() => import('./Homepage'));
const About = lazy(() => import('./aboutpage'));
const Servicespage = lazy(() => import('./servicespage'));
const Servicespage2 = lazy(() => import('./servicepage2'));
const Servicespage3 = lazy(() => import('./servicepage3'));
const Servicespage4 = lazy(() => import('./servicepage4'));
const Careerspage = lazy(() => import('./careerspage'));
const Dashbord = lazy(() => import('./dashbord'));
const Brouchurecontacts = lazy(() => import('./brouchurecontacts'));
const Blog = lazy(() => import('./blog'));
const Blogcontent1 = lazy(() => import('./blogcontent1'));
const Blogcontent2 = lazy(() => import('./bogcontent2'));
const Blogcontent3 = lazy(() => import('./blogcontent3'));
const Blogcontent4 = lazy(() => import('./blogcontent4'));
const Blogcontent5 = lazy(() => import('./blogcontent5'));
const Blogcontent6 = lazy(() => import('./blogcontent6'));
const Adminlogin = lazy(() => import('./components/Navbar/Adminlogin'));

const ContactUs = lazy(() => import('./contactus'));
const Privacypolicy = lazy(() => import('./privacypolicy'));
const Leagalnotice = lazy(() => import('./Leagalnotice'));

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the scroll position resets on route changes */}
      <Suspense fallback={<div>Loading...</div>}> {/* Placeholder for loading */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service1" element={<Servicespage />} />
          <Route path="/service2" element={<Servicespage2 />} />
          <Route path="/service3" element={<Servicespage3 />} />
          <Route path="/service4" element={<Servicespage4 />} />
          <Route path="/careerspage" element={<Careerspage />} />
          <Route path="/dasbord" element={<Dashbord />} />
          <Route path="/download" element={<Brouchurecontacts />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogcontent1" element={<Blogcontent1 />} />
          <Route path="/blogcontent2" element={<Blogcontent2 />} />
          <Route path="/blogcontent3" element={<Blogcontent3 />} />
          <Route path="/blogcontent4" element={<Blogcontent4 />} />
          <Route path="/blogcontent5" element={<Blogcontent5 />} />
          <Route path="/blogcontent6" element={<Blogcontent6 />} />
          <Route path="/contactpage" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/leagalnotice" element={<Leagalnotice />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
