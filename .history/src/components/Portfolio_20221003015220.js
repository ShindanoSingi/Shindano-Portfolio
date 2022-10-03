import React, {useState, useEffect} from "react";
import {FaHandPointUp} from "react-icons/fa";
import './Portfolio.css'

const Portfolio = () => {
     const [showTopBtn, setShowTopBtn] = useState(false);
     const goToTop = () => {
          window.scrollTo({top: 0, behavior: "smooth"});
     };
     useEffect(() => {
          window.addEventListener("scroll", () => {
               if (window.scrollY > 400) {
                    setShowTopBtn(true);
               } else {
                    setShowTopBtn(false);
               }
          });
     }, []);

     return (
          <div className="flex flex-col min-h-screen font-sans font-light  gap-4 py-[5rem]  bg-black">
               <div className=" top-to-btm">
                    <button className="bg-orange-500">
                         Button
                    </button>
                    {
                    showTopBtn && (
                         <FaHandPointUp className="icon-position icon-style"
                              onClick={goToTop}/>
                    )
               } </div>
          </div>
     );
};
export default Portfolio;
