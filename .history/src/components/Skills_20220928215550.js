import html from '../images/html.svg';
import React from 'react';
import react from '../images/react.svg';
import css3 from '../images/css.png';
import bootstrap from '../images/bootstrap.svg';
import materialize from '../images/materialize.svg';
import materialui from '../images/material-ui.svg';
import background from '../images/grid-background.jpeg';

const Skills = () => {
     return (
          <div className="min-h-[100%]">
               <div className="grid h-screen place-items-center bg-[url('/src/images/grid-background.jpeg')]">
                    <div className="text-center fixed top-[3.5rem]  md:top-[4rem]h-16 min-w-full py-auto  justify-center   bg-teal-600">
                         <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">SKILLS</h5>
                    </div>
                    <div class="mx-auto  mt-[8rem] mb-2">
                         <div class="block rounded-lg  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-sm text-center">
                              <div class="py-3 text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   HTML
                              </div>
                              <div class="p-6 flex font-sans justify-center gap-4 font-light">
                                   <div className='flex flex-col items-center'>
                                        <img src={html}
                                             className='w-16'
                                             alt=' '/>
                                        <p className="text-base">HTML5</p>
                                   </div>
                                   <div className='flex flex-col items-center'>
                                        <img src={react}
                                             className='w-16'
                                             alt=' '/>
                                        <p className="text-base">JSX</p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] md:max-w-sm text-center">
                         <div class="py-3 text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                              CSS
                         </div>
                         <div class="p-6 grid grid-cols-2  gap-2 items-center  font-sans font-light">
                              <div className='flex flex-col items-center'>
                                   <img src={css3}
                                        className='w-16'
                                        alt=' '/>
                                   <p className="text-base">CSS3</p>
                              </div>
                              <div className='flex flex-col items-center'>
                                   <img src={bootstrap}
                                        className='w-16'
                                        alt=' '/>
                                   <p className="text-base">BOOTSTRAP</p>
                              </div>
                              <div className='flex flex-col items-center'>
                                   <img src={materialize}
                                        className='w-16'
                                        alt=' '/>
                                   <p className="text-base">MATERIALIZE</p>
                              </div>
                              <div className='flex flex-col items-center'>
                                   <img src={materialui}
                                        className='w-16'
                                        alt=' '/>
                                   <p className="text-base">MATERIAL UI</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
