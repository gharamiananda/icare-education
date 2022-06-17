import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './pages/AboutPage/AboutPage';
import Collages from './pages/Collages/Collages';
import Courses from './pages/Courses/Courses';

import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import loader from '../src/images/loader.png'
import Academics from './pages/Academics/Academics';
import Admission from './pages/Admission/Admission';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>




      <div className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="collages" element={<Collages />} />
          <Route path="courses" element={<Courses />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>

        <Footer></Footer>

      </div>

    </>
  );
}

export default App;
