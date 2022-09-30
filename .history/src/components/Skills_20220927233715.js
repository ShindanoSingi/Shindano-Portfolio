import html from '../images/html5.png';
import React from 'react';

const Skills = () => {
     return (
          <div>
               <div className="grid h-screen place-items-center">
                    <div class="flex justify-center  mt-[5rem] mb-4">
                         <div className="text-center fixed top-[3.5rem]  md:top-[4rem]h-16 min-w-full py-auto  justify-center   bg-teal-600">
                              <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">SKILLS</h5>
                         </div>
                         <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                              <div class="py-3 text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   HTML
                              </div>
                              <div class="p-6 font-sans font-light">
                                   <div className='flex flex-col'>
                                        <img src={html}
                                             alt=""/>
                                        <p>HTML5</p>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
