import { useState, useEffect } from "react";
import Navbar, { ScrollDownNavBar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import DotNav from "./components/DotNav";

function App() {

  //set the navbar
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app ">
      <Navbar />
      {isTopOfPage ? null : <ScrollDownNavBar />}

      <Outlet></Outlet>
      <div className="w-5/6 mx-auto md:h-full text-inherit">
        {/* <DotNav></DotNav> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
