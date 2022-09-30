import React from 'react';
import msgc from '../images/msgc.jpeg';

const Awards = () => {
     return (
          <div className="grid  min-h-screen bg-[#dcd8d8] pb-4">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-600">
                    <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">AWARDS</h5>
               </div>
               <div className=" pb-2 mx-auto md:mt-4">
                    <div class="mx-auto  mt-[8rem] mb-2">
                         <div class="block rounded-lg md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                              <div class="py-3 text-center  text-2xl text-teal-700 font-sans font-light  px-6 border-b border-gray-300">
                                   PRESIDENT'S HONOR
                              </div>
                              <div class="p-6 flex font-sans justify-center gap-12 font-light">
                                   <div className='flex flex-col items-center'>
                                        <p className="text-lg text-yellow-900 mb-2">Central Maine Community College | 2015</p>
                                        <li className="text-base">Awarded to students who had GPA from 3.8/4.0 to 4.0/4.0</li>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="block rounded-lg mb-2 md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                         <div class="py-3 text-center  text-2xl text-teal-700 font-sans font-light  px-6 border-b border-gray-300">
                              BEST 2ND POSTER
                         </div>
                         <div class="p-6 flex font-sans justify-center gap-12 font-light">
                              <div className='flex flex-col items-center'>
                                   <p className="text-lg text-yellow-900 mb-2">UNIV. OF SOUTHERN MAINE| 2019</p>
                                   <li className="text-base">Presented my project "Design, Simulation and Test of Micro ElectroMechanical Systems (MEMS) Piezo Electric Energy Harvester" at the University at Buffalo, NY.
                                        <span></span><br/>My poster was selected as the second best one.
                                   </li>
                              </div>
                         </div>
                    </div>

                    <div class="block rounded-lg mb-2 md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                         <a href="https://digitalcommons.usm.maine.edu/cgi/viewcontent.cgi?article=1059&context=thinking-matters-symposium">

                              <a href="https://usm.maine.edu/research/undergraduate-research-opportunities-program-urop">
                                   <div class="py-3 text-center uppercase  text-2xl text-teal-700 font-sans font-light  px-6 border-b border-gray-300">
                                        Undergraduate Research Opportunities Program (UROP)
                                   </div>
                              </a>

                              <div class="p-6 flex font-sans justify-center gap-12 font-light">
                                   <div className='flex flex-col items-center'>
                                        <p className="text-lg text-yellow-900 mb-2">UNIV. OF SOUTHERN MAINE| 2018</p>
                                        <li className="text-base">My project "Design and Simulation of Micro ElectroMechanical Systems (MEMS) Piezo Electric Energy Harvester" received fund from UROP</li>
                                   </div>
                              </div>
                         </a>
                    </div>
                    <div class="block rounded-lg md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                         <a href="https://www.msgc.org/">
                              <div class="py-3 text-center justify-evenly flex items-center  text-2xl text-teal-700 font-sans font-light  px-6 border-b border-gray-300">
                                   MAINE SPACE GRANT CONSURTIUM (MSGC)
                                   <img src={msgc}
                                        className="w-20 h-20"
                                        alt="msgc"/>
                              </div>
                         </a>

                         <div class="p-6 flex font-sans justify-center gap-12 font-light">
                              <div className='flex flex-col items-center'>
                                   <p className="text-lg text-yellow-900 mb-2">UNIV. OF SOUTHERN MAINE| 2019</p>
                                   <li className="text-base text-left">My project "Design, Simulation and Test of Micro ElectroMechanical Systems (MEMS) Piezo Electric Energy Harvester" received grant from the state of Maine Space Grant</li>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Awards;
