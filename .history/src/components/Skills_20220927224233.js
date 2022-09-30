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
                              <div class="py-3 px-6 border-b border-gray-300">
                                   Featured
                              </div>
                              <div class="p-6">
                                   <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                                   <p class="text-gray-700 text-base mb-4">
                                        With supporting text below as a natural lead-in to additional content.
                                   </p>
                                   <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
