import React from 'react';
import chatApp from '../images/mobile.gif'
import youtube from '../images/youtube.gif';
import userM from '../images/userM.png';
import weather from '../images/weather.gif';
import Trivia from '../images/Trivia.png';

const Projects = () => {
     return (
          <div className="">
               <div className="grid mt-[5rem] h-screen mx-2 place-items-center">
                    <div class="flex justify-center mb-4">
                         <div class="flex flex-col py-2 md:max-w-md rounded-lg bg-white shadow-lg">
                              <img class=" w-[22rem] mx-auto h-full md:w-[15rem]  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={chatApp}
                                   alt=""/>
                              <div class="p-4 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-4">Real-Time Chat App</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Created an application that enabled users to chat in real time. The goal of the project was to let users chat in privacy. Implemented user sign- up, sign In; room Creation, Update, and Deletion (CRUD). Also, users were able to delete messages. Used SQL, relational database to store users’data. The following technologies were used: Django and SQL for the back end and templates, JavaScript, Vanilla CSS, Materialize, Bootstrap, and TailWindCSS were utilized for the front end.
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-4">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Django | SQL | Templates | JavaScript | CSS | Materialize | Bootstrap | TailWindCSS</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-4">
                         <div class="flex flex-col py-2 md:max-w-md rounded-lg bg-white shadow-lg">
                              <a href="https://bembe-tube.netlify.app/">
                                   <img class=" w-[22rem] mx-auto h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                        src={youtube}
                                        alt=""/>
                              </a>

                              <div class="p-4 flex flex-col justify-start w-max-sm">
                                   <a href="https://bembe-tube.netlify.app/">
                                        <h5 class="text-gray-900 text-xl text-center font-medium mb-4 hover:text-blue-600 underline">Ads-Free-YouTube-Clone</h5>
                                   </a>

                                   <li class="text-gray-700 text-base mb-4">
                                        Added a filter to block interrupting ads. We utilized YouTube APIs, React, Vanilla JavaScript, CSS, Materials UI, and Bootstrap on the front end, and express, passport, and MongoDB on the backend.
                                   </li>
                                   <li class="text-gray-700 text-base mb-4">
                                        Allowed the user to use the app without signing up/in or signing up/in. By signing in the user would be able to create playlists, like videos... Additionally, we made our app mobile responsive so users could be able to use the app on their mobile devices.
                                   </li>
                                   <li class="text-gray-700 text-base mb-4">
                                        Collaborated with a team of 4 software engineers in a 2-week sprint...
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-4">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">React | CSS | YouTube APIs | Vanilla JavaScript | Materials UI | Bootstrap
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-4">
                         <div class="flex py-2  flex-col md:max-w-md rounded-lg bg-white shadow-lg">
                              <img class=" w-[22rem] mx-auto  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={userM}
                                   alt=""/>
                              <div class="p-4 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-4">User Management System</h5>

                                   <li class="text-gray-700 text-base mb-4">Made RESTful API fetch calls to an Express, MongoDB, Node.js backend</li>
                                   <li class="text-gray-700 text-base mb-4">Created an application that utilized fetch calls to YouTube videos API. Implemented a user management system to let the user create an account so he/she could be able to sign in and access the YouTube app that I customized to play videos without ads.</li>
                                   <li class="text-gray-700 text-base mb-4">Used Vanilla Java Script, handlebars, EJS, CSS, bootstrap, and awesome fonts for the front end.</li>
                                   <li class="text-gray-700 text-base mb-4">Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all Create, Read, Update and Delete (CRUD) operations, and tested all backend routes during development using Postman.</li>
                                   <li class="text-gray-700 text-base mb-4">Used Mongoose to define schemas for MongoDB collections, and express for the database.</li>
                                   <li class="text-gray-700 text-base mb-4">Implemented ES6 tagged template literals with styled-components along CSS3 to provide style and flex-box layout of the application.</li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-4">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Express | MongoDB | Node.js | Vanilla JavaScript | handlebars | EJS | CSS | bootstrap | awesome fonts</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-4">
                         <div class="flex py-2  flex-col md:max-w-md rounded-lg bg-white shadow-lg">
                              <a href="https://bembe-weather.netlify.app/">
                                   <img class=" w-[22rem] mx-auto  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                        src={weather}
                                        alt=""/>
                              </a>

                              <div class="p-4 flex flex-col justify-start w-max-sm">
                                   <a href="https://bembe-weather.netlify.app/">
                                        <h5 class="text-gray-900 text-xl text-center font-medium mb-4 hover:text-blue-600 underline">Weather App</h5>
                                   </a>
                                   <li class="text-gray-700 text-base mb-4">Created a worldwide weather app using weather API. The app utilized these technologies: React, CSS, materialize, and BootStrap.</li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-4">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">React | CSS | materialize | BootStrap</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-4">
                         <div class="flex py-2  flex-col md:max-w-md rounded-lg bg-white shadow-lg">
                              <img class=" w-[22rem] mx-auto  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={Trivia}
                                   alt=""/>
                              <div class="p-4 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-4">Trivia</h5>

                                   <li class="text-gray-700 text-base mb-4">Designed a mobile responsive application that utilized an API, Js, and HTML to generate questions and answers. The app had two modes: In the first mode, challenge mode, the user was being challenged based on the difficulty level selected. In the second mode, the learning mode, the user was learning; that is, the user should click on the answer button to see the answer. Used CSS to style the application. Reviewed Code prior to running the application. Did project documentation in README. Followed test procedures to successfully build the application.</li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-4">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">API | JavaScript | HTML | CSS | TailWindCSS</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Projects;
