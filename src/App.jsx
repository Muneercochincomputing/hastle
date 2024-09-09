import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './aboutpage';
import Servicespage from './servicespage';
import Careerspage from './careerspage';
import Dashbord from './dashbord';
import Blog from './blog';
import ContactUs from './contactus';
import Servicespage2 from './servicepage2';
import Servicespage3 from './servicepage3';
import Servicespage4 from './servicepage4';
import Blogcontent1 from './blogcontent1';
import Blogcontent2 from './bogcontent2';
import Blogcontent3 from './blogcontent3';
import Blogcontent4 from './blogcontent4';
import Blogcontent5 from './blogcontent5';
import Blogcontent6 from './blogcontent6';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component
import Privacypolicy from './privacypolicy';
import Leagalnotice from './Leagalnotice';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/hastle/" element={<Homepage />} />
        <Route path="/hastle/about" element={<About />} />
        <Route path="/hastle/service1" element={<Servicespage />} />
        <Route path="/hastle/careers" element={<Careerspage />} />
        <Route path="/hastle/dasbord" element={<Dashbord />} />
        <Route path="/hastle/blog" element={<Blog />} />
        <Route path="/hastle/contact" element={<ContactUs />} />
        <Route path="/hastle/service2" element={<Servicespage2 />} />
        <Route path="/hastle/service3" element={<Servicespage3 />} />
        <Route path="/hastle/service4" element={<Servicespage4 />} />
        <Route path="/hastle/blogcontent1" element={<Blogcontent1 />} />
        <Route path="/hastle/blogcontent2" element={<Blogcontent2 />} />
        <Route path="/hastle/blogcontent3" element={<Blogcontent3 />} />
        <Route path="/hastle/blogcontent4" element={<Blogcontent4 />} />
        <Route path="/hastle/blogcontent5" element={<Blogcontent5 />} />
        <Route path="/hastle/blogcontent6" element={<Blogcontent6 />} />
        <Route path="/hastle/privacypolicy" element={<Privacypolicy />} />
        <Route path="/hastle/leagalnotice" element={<Leagalnotice />} />
      </Routes>
    </Router>
  );
}

export default App;
