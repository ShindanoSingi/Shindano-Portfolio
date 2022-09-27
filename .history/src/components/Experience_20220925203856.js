import React from 'react';
import GA from './GA.png'

const Experience = () => {
     return (
          <div className="mt-[5rem]">
               <div class="flex justify-center">
                    <div class="block w-[92vw]  rounded-lg shadow-lg bg-white max-w-sm text-center">
                         <div class="py-3 px-2 border-b border-gray-300">
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <img src={GA}
                                        alt="GA"
                                        className="w-6 h-6"/>
                              </a>
                              <a href="https://generalassemb.ly/" target="_blank" rel='noopener noreferrer'>
                                   <h1 className="px-2 hover:bg-red-500 w-fit">General Assembly</h1>
                              </a>

                              <h1>Fellow Full Stack Developer</h1>
                         </div>
                         <div class="p-6">
                              <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                              <p class="text-gray-700 text-base mb-4">
                                   With supporting text below as a natural lead-in to additional content.
                              </p>
                         </div>
                         <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                              2 days ago
                         </div>
                    </div>
               </div>
          </div>

     );
}

export default Experience;
