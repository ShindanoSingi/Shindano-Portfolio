import React from 'react';
import USM from '../images/usm.png';
import cmcc from '../images/cmcc.png';
import GA from '../images/GA.png';


const Education = () => {
     return (
          <div className="flex flex-col min-h-screen font-sans font-light  gap-4 py-[5rem]  bg-black">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center text-white   bg-teal-800">
                    <h5 class=" align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">EDUCATION</h5>
               </div>
               <div class="flex mt-[5rem] flex-col mx-auto  justify-center">
                    <div class="block w-[92vw] font-sans text-lg mb-2  rounded-sm shadow-lg bg-white max-w-4xl md:text-xl text-center">
                         <div class="py-3 flex justify-between px-4  items-center  border-b border-gray-300">
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <img src={GA}
                                        alt="GA"
                                        className="w-8 h-8 md:w-12 md:h-12"/>
                              </a>
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <h1 className="px-3 hover:bg-[#E4222A] mt-0.5 font-bold  w-fit">GENERAL ASSEMBLY</h1>
                              </a>

                         </div>
                         <div className="py-2">
                              <h1 className="font-sans">Full Stack Software Development</h1>
                         </div>

                         <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
                              Jan. 2022 - July 2022
                         </div>
                    </div>
                    <div class="block w-[92vw] font-sans text-lg mb-2  rounded-sm shadow-lg bg-white max-w-4xl md:text-xl text-center">
                         <div class="py-3 flex justify-between px-4    items-center  border-b border-gray-300">
                              <a href="https://catalog.usm.maine.edu/preview_program.php?catoid=6&poid=1195" target="_blank" rel='noopener noreferrer'>
                                   <img src={USM}
                                        alt="USM"
                                        className="w-full h-12 md:full md:h-12"/>
                              </a>
                              <a href="https://catalog.usm.maine.edu/preview_program.php?catoid=6&poid=1195" target="_blank" rel='noopener noreferrer'>
                                   <h1 className="px-3 hover:bg-[#01529B] hover:text-white font-bold  w-fit mt-0.5">UNIV. OF SOUTEHRN MAINE</h1>
                              </a>

                         </div>
                         <div className="py-2">
                              <h1 className="font-sans">B.S. Electrical an Computer Engineering</h1>
                              <h2>Minor: Computer Science</h2>
                         </div>

                         <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
                              May 2016 - May 2020
                         </div>
                    </div>
                    <div class="block w-[92vw] font-sans text-lg  rounded-sm shadow-lg bg-white max-w-4xl md:text-xl text-center">
                         <div class="py-3  flex justify-between px-4    items-center  border-b border-gray-300">
                              <a href="https://www.cmcc.edu/academics/programs/programs-of-study/electromechanical-technology/" target="_blank" rel='noopener noreferrer'>
                                   <img src={cmcc}
                                        alt="CMCC"
                                        className="w-full h-12 md:full md:h-12"/>
                              </a>
                              <a href="https://www.cmcc.edu/academics/programs/programs-of-study/electromechanical-technology/" target="_blank" rel='noopener noreferrer'>
                                   <h1 className=" hover:bg-red-700 hover:text-white mt-0.5 mx-1 font-bold">CENTRAL MAINE COMM. COLLEGE</h1>
                              </a>

                         </div>
                         <div className="py-2">
                              <h1 className="font-sans">A.A.S. ElectroMechanical Technology</h1>
                         </div>

                         <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
                              May 2012 - May 2015
                         </div>
                    </div>
               </div>

          </div>

     );
}

export default Education;
