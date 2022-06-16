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
      {
        loading ? <img src={loader} /> :



          <div class="custom-cursor">
            <div class="custom-cursor__cursor"></div>
            <div class="custom-cursor__cursor-two"></div>
            <Navbar></Navbar>


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="collages" element={<Collages />} />
              <Route path="courses" element={<Courses />} />
            </Routes>

            <Footer></Footer>

          </div>
      }
    </>
  );
}

export default App;
