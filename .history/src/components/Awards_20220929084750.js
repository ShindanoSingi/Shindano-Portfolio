import React from 'react';
import html from '../images/html.svg';
import react from '../images/react.svg';
import css3 from '../images/css.png';
import bootstrap from '../images/bootstrap.svg';
import materialize from '../images/materialize.svg';
import materialui from '../images/material-ui.svg';
import Javascript from '../images/javascript.png';
import node from '../images/node js.webp';
import jquery from '../images/jquery.jpeg'
import sql from '../images/sql.svg';
import mongodb from '../images/mongodb.svg';
import django from '../images/django.svg';
import github from '../images/github.svg';
import express from '../images/express.svg';
import mysql from '../images/mysql.svg';
import sql1 from '../images/sql1.svg';
import heroku from '../images/heroku.svg';
import netlify from '../images/netlify.svg';

const Awards = () => {
     return (
          <div className="grid  min-h-screen bg-[#dcd8d8] ">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-600">
                    <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">AWARDS</h5>
               </div>
               <div className=" pb-2 mx-auto md:mt-4">
                    <div class="mx-auto  mt-[8rem] mb-2">
                         <div class="block rounded-lg md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                              <div class="py-3 text-left  text-2xl text-teal-700 font-sans font-light  px-6 border-b border-gray-300">
                                   PRESIDENT'S HONOR
                              </div>
                              <div class="p-6 flex font-sans justify-center gap-12 font-light">
                                   <div className='flex flex-col items-center'>
                                        <p className="text-base">Awarded to student who had GPA from 3.6/4.0 to 4.0/4.0</p>
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
               </div>
          </div>
     );
}

export default Awards;
