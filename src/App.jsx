import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/home/Home.jsx";
import Header from "./pages/includes/Header.jsx";
import Footer from "./pages/includes/Footer.jsx";

function App() {

    useEffect(() => {
        AOS.init({
            delay: 50,
            duration: 2000,
            offset: 120,
            disable: 'mobile',
        });
    }, [])
  return (
    <>
        <Header />
        <Home />
        <Footer />
    </>
  )
}

export default App
