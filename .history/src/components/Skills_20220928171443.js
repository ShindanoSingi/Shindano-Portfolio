import html from '../images/html5.png';
import React from 'react';
import react from '../images/react.png'
import css3 from '../images/css3.png';
import bootstrap from '../images/bootstrap.png'
import materialize from '../images/materialize.png'
import materialui from '../images/material-ui.png';

const Skills = () => {
     return (
          <div>
               <div className="grid h-screen place-items-center bg-gray-500">
                    <div class="flex justify-center  mt-[8rem] mb-2">
                         <div className="text-center fixed top-[3.5rem]  md:top-[4rem]h-16 min-w-full py-auto  justify-center   bg-teal-600">
                              <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">SKILLS</h5>
                         </div>
                         <div class="block rounded-lg shadow-lg bg-white w-screen mx-auto  md:max-w-sm text-center">
                              <div class="py-3 text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   HTML
                              </div>
                              <div class="p-6 flex font-sans justify-center gap-4 font-light">
                                   <div className='flex flex-col items-center'>
                                        <img src={html}
                                             className='w-12 md:w-16'
                                             alt=' '/>
                                        <p className="text-xs md:md:text-base">HTML5</p>
                                   </div>
                                   <div className='flex flex-col items-center'>
                                        <img src={react}
                                             className='w-12  md:w-16'
                                             alt=' '/>
                                        <p className="text-xs md:text-base">JSX</p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center  mt-[8rem] mb-2">
                         <div className="text-center fixed top-[3.5rem]  md:top-[4rem]h-16 min-w-full py-auto  justify-center   bg-teal-600">
                              <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">SKILLS</h5>
                         </div>
                         <div class="block rounded-lg shadow-lg bg-white w-screen mx-auto  md:max-w-sm text-center">
                              <div class="py-3 text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   HTML
                              </div>
                              <div class="p-6 flex font-sans justify-center gap-4 font-light">
                                   <div className='flex flex-col items-center'>
                                        <img src={html}
                                             className='w-12 md:w-16'
                                             alt=' '/>
                                        <p className="text-xs md:md:text-base">HTML5</p>
                                   </div>
                                   <div className='flex flex-col items-center'>
                                        <img src={react}
                                             className='w-12  md:w-16'
                                             alt=' '/>
                                        <p className="text-xs md:text-base">JSX</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
