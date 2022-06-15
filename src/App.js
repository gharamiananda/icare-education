import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './pages/About/AboutPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
