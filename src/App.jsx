import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/home/Home.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Jobs from "./pages/jobs/Jobs.jsx";

function App() {

    useEffect(() => {
        AOS.init({
            delay: 50,
            duration: 1000,
            offset: 120,
            disable: 'mobile',
        });
    }, [])
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/jobs" element={ <Jobs /> } />
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App
