import html from "../images/html.svg";
import React from "react";
import react from "../images/react.svg";
import css3 from "../images/css.png";
import bootstrap from "../images/bootstrap.svg";
import materialize from "../images/materialize.svg";
import materialui from "../images/material-ui.svg";
import Javascript from "../images/javascript.png";
import node from "../images/node js.webp";
import jquery from "../images/jquery.jpeg";
import sql from "../images/sql.svg";
import mongodb from "../images/mongodb.svg";
import django from "../images/django.svg";
import github from "../images/github.svg";
import express from "../images/express.svg";
import mysql from "../images/mysql.svg";
import sql1 from "../images/sql1.svg";
import heroku from "../images/heroku.svg";
import netlify from "../images/netlify.svg";
import firebase from "../images/firebase.svg";
import python from "../images/Python.png";
import mongo from "../images/mongo.svg";
import json from "../images/json.svg";
import ejs from "../images/ejs.svg";
import sqlserver from "../images/sqlserver.svg";
import csharp from "../images/csharp.svg";
import visual from "../images/visual.svg";
import java from "../images/java.svg";
import reactnative from "../images/reactnative.svg";
import mongoose from "../images/mongoose.svg";



const Skills = () => {
     return (
          <div className="grid min-h-screen bg-black">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-800">
                    <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">
                         SKILLS
                    </h5>
               </div>
               <div className="pb-2 mx-auto md:mt-4">
                    <div class="mx-auto  mt-[8rem] mb-2">
                         <div class="block rounded-lg md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                              <div class="py-3 text-left  text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   PROGRAMMING LANGUAGES
                              </div>
                              <div class="p-6 grid grid-cols-3 md:grid lg:grid xl:grid md:justify-evenly md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-2 items-center  font-sans font-light">
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={html}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">HTML5</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={css3}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">CSS3</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={react}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">JSX</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={python}
                                             className="w-10 md:w-12 lg:w-14"
                                             alt=" "
                                        />
                                        <p className="text-base">Python</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={Javascript}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">Javascript</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={mongo}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">Mongo</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={json}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">JSON</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={ejs}
                                             className="w-10 md:w-12 lg:w-16"
                                             alt=" "
                                        />
                                        <p className="text-base">EJS</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={ejs}
                                             className="w-10 md:w-12 lg:w-16 fill-lime-600"
                                             alt=" "
                                        />
                                        <p className="text-base">HBS</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={sqlserver}
                                             className="w-10 md:w-12 lg:w-16 fill-lime-600"
                                             alt=" "
                                        />
                                        <p className="text-base">SQL Server</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={csharp}
                                             className="w-10 md:w-12 lg:w-16 fill-lime-600"
                                             alt=" "
                                        />
                                        <p className="text-base">C#</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={visual}
                                             className="w-10 md:w-12 lg:w-16 fill-lime-600"
                                             alt=" "
                                        />
                                        <p className="text-base">Visual Studio</p>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <img
                                             src={java}
                                             className="w-10 md:w-12 lg:w-16 fill-lime-600"
                                             alt=" "
                                        />
                                        <p className="text-base">Java</p>
                                   </div>
                              </div>
                         </div>
                    </div>

                     {/* ------------------------------------------------------------------------------------------------ */}

                    <div class="mx-auto mb-2">
                         <div class="block rounded-lg md:mb-2  shadow-lg bg-white w-[90vw] mx-auto  md:max-w-4xl text-center">
                              <div class="py-3 text-left  text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                                   FRAMEWORKS
                              </div>
                              <div class="p-6 grid grid-cols-3 md:grid lg:grid xl:grid md:justify-evenly md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-2 items-center  font-sans font-light justify-center">
                                   <div className="flex flex-col items-center">
                                   <img src={node} className="w-36" alt=" " />
                                   <p className="text-base">NodeJS</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={express}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Express Js</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={bootstrap}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Bootstrap</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={materialize}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Materialize</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={materialui}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Material UI</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={react} className="w-16" alt=" " />
                                   <p className="text-base">React</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={reactnative} className="w-16" alt=" " />
                                   <p className="text-base">React Native</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={django} className="w-16" alt=" " />
                                   <p className="text-base">Django</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={jquery} className="w-20" alt=" " />
                                   <p className="text-base">jQuery</p>
                              </div>
                              </div>
                         </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------ */}

                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] mb-2 md:max-w-4xl text-center">
                         <div class="py-3 text-left text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                         DEPLOYMENT TOOLS
                         </div>
                         <div class="p-6 grid grid-cols-3 md:grid lg:grid xl:grid md:justify-evenly md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-2 items-center  font-sans font-light justify-center">
                         <div className="flex flex-col items-center">
                                   <img src={heroku} className="w-16" alt=" " />
                                   <p className="text-base">Heroku</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={netlify}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Netlify</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={github} className="w-16" alt=" " />
                                   <p className="text-base">GitHub</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img
                                        src={firebase}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Firebase</p>
                              </div>
                         </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------- */}

                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] mb-2 md:max-w-4xl text-center">
                         <div class="py-3 text-left text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                         DATABASES
                         </div>
                         <div class="p-6 grid grid-cols-3 md:grid lg:grid xl:grid md:justify-evenly md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-2 items-center  font-sans font-light justify-center">
                         <div className="flex flex-col items-center">
                                   <img src={sql} className="w-16" alt=" " />
                                   <p className="text-base">PostgreSQL</p>
                              </div>
                              <div className="flex flex-col items-center gap-6 mt-5">
                                   <img
                                        src={mongodb}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">MongoDB</p>
                              </div>


                              <div className="flex flex-col items-center">
                                   <img src={mysql} className="w-16" alt=" " />
                                   <p className="text-base">MySQL</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={sql1} className="w-16" alt=" " />
                                   <p className="text-base">SQL</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={mongoose} className="w-16" alt=" " />
                                   <p className="text-base">Mongoose</p>
                              </div>
                         </div>
                    </div>








                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] mb-2 md:max-w-4xl text-center">
                         <div class="py-3 text-left text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                              Javascript
                         </div>
                         <div class="p-6 grid grid-cols-2 md:flex md:justify-evenly  gap-2 items-center  font-sans font-light">

                              <div className="flex flex-col items-center">
                                   <img
                                        src={Javascript}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">Javascript</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={node} className="w-36" alt=" " />
                                   <p className="text-base">Node</p>
                              </div>

                         </div>
                    </div>

                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] mb-2 md:max-w-4xl text-center">
                         <div class="py-3 text-left text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                              Back-End
                         </div>
                         <div class="p-6 grid grid-cols-2 md:flex md:justify-evenly  gap-2 items-center  font-sans font-light">
                              <div className="flex flex-col items-center">
                                   <img src={sql} className="w-16" alt=" " />
                                   <p className="text-base">PostgreSQL</p>
                              </div>
                              <div className="flex flex-col items-center gap-6 mt-5">
                                   <img
                                        src={mongodb}
                                        className="w-16"
                                        alt=" "
                                   />
                                   <p className="text-base">MongoDB</p>
                              </div>


                              <div className="flex flex-col items-center">
                                   <img src={mysql} className="w-16" alt=" " />
                                   <p className="text-base">MySQL</p>
                              </div>
                              <div className="flex flex-col items-center">
                                   <img src={sql1} className="w-16" alt=" " />
                                   <p className="text-base">SQL</p>
                              </div>
                         </div>
                    </div>

                    <div class="block rounded-lg shadow-lg bg-white w-[90vw] mb-2 md:max-w-4xl text-center">
                         <div class="py-3 text-left text-3xl text-yellow-900 font-sans font-light  px-6 border-b border-gray-300">
                              Deployment Tools
                         </div>
                         <div class="p-6 grid grid-cols-2 md:flex md:justify-evenly  gap-2 items-center  font-sans font-light">

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Skills;
