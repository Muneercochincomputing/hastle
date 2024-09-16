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
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service1" element={<Servicespage />} />
        <Route path="/careerspage" element={<Careerspage />} />
        <Route path="/dasbord" element={<Dashbord />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactpage" element={<ContactUs />} />
        <Route path="/service2" element={<Servicespage2 />} />
        <Route path="/service3" element={<Servicespage3 />} />
        <Route path="/service4" element={<Servicespage4 />} />
        <Route path="/blogcontent1" element={<Blogcontent1 />} />
        <Route path="/blogcontent2" element={<Blogcontent2 />} />
        <Route path="/blogcontent3" element={<Blogcontent3 />} />
        <Route path="/blogcontent4" element={<Blogcontent4 />} />
        <Route path="/blogcontent5" element={<Blogcontent5 />} />
        <Route path="/blogcontent6" element={<Blogcontent6 />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/leagalnotice" element={<Leagalnotice />} />
      </Routes>s
    </Router>
  );
}

export default App;
