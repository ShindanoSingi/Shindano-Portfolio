import React from 'react';
import GA from '../images/GA.png'
import USM from '../images/usm.png';
import HOL from '../images/HOL.png';


const Education = () => {
     return (
          <div className="flex flex-col min-h-screen font-sans font-light  gap-4 py-[5rem]  bg-black">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem]h-16 min-w-full py-auto  justify-center text-white   bg-teal-800">
                    <h5 class=" align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">EDUCATION</h5>
               </div>
               <div class="flex mt-[5rem]  justify-center">
                    <div class="block w-[92vw]  rounded-sm shadow-lg bg-white max-w-4xl md:text-xl text-center">
                         <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <img src={GA}
                                        alt="GA"
                                        className="w-8 h-8 md:w-12 md:h-12"/>
                              </a>
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <h1 className="px-3 hover:bg-[#E4222A] mt-0.5  w-fit">GENERAL ASSEMBLY</h1>
                              </a>
                              <h1>Fellow Full Stack Developer</h1>
                         </div>
                         <div class="p-2">
                              <div class="text-gray-700 text-left  mb-1">
                                   <li className="px-3">
                                        Completed 400+ hours of expert-led instruction in front-end and full- stack development, database management, and hands-on learning of full-stack fundamentals and the industry's most in-demand technologies.
                                   </li>
                              </div>
                         </div>
                         <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
                              Jan. 2022 - July 2022
                         </div>
                    </div>
               </div>

          </div>

     );
}

export default Education;
