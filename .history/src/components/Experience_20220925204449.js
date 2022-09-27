import React from 'react';
import GA from './GA.png'

const Experience = () => {
     return (
          <div className="mt-[5rem]">
               <div class="flex justify-center">
                    <div class="block w-[92vw]  rounded-lg shadow-lg bg-white max-w-sm text-center">
                         <div class="py-3 px-2 flex flex-col items-center  border-b border-gray-300">
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <img src={GA}
                                        alt="GA"
                                        className="w-8 h-8"/>
                              </a>
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <h1 className="px-2 hover:bg-red-500 w-fit">GENERAL ASSEMBLY</h1>
                              </a>
                              <h1>Fellow Full Stack Developer</h1>
                         </div>
                         <div class="p-2">
                              <ul class="text-gray-700 text-md mb-4">
                                   Completed 400+ hours of expert-led instruction in front-end and full- stack development, database management, and hands-on learning of full-stack fundamentals and the industry's most in-demand technologies.
                              </ul>
                         </div>
                         <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                              Jan. 2022 - July 2022
                         </div>
                    </div>
               </div>
          </div>

     );
}

export default Experience;
