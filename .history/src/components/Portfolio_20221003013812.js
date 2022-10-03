import React, {useState, useEffect} from "react";
import {FaHandPointUp} from "react-icons/fa";
import './Portfolio.css'

const Portfolio = () => {
     const [showTopBtn, setShowTopBtn] = useState(false);
     useEffect(() => {
          window.addEventListener("scroll", () => {
               if (window.scrollY > 400) {
                    setShowTopBtn(true);
               } else {
                    setShowTopBtn(false);
               }
          });
     }, []);
     const goToTop = () => {
          window.scrollTo({top: 0, behavior: "smooth"});
     };
     return (
          <div className="bg-red-700 top-to-btm">

               {
               showTopBtn && (
                    <FaHandPointUp className="icon-position icon-style"
                         onClick={goToTop}/>
               )
          } </div>
     );
};
export default Portfolio;
