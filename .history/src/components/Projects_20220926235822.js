import React from 'react';
import chatApp from '../images/mobile.gif'
import youtube from '../images/youtube.gif';

const Projects = () => {
     return (
          <div className="">
               <div className="grid h-screen mx-1 place-items-center">
                    <div class="flex justify-center mb-2">
                         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                              <img class=" w-max-sm mx-1  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={chatApp}
                                   alt=""/>
                              <div class="p-2 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-2">Real-Time Chat App</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Created an application that enabled users to chat in real time. The goal of the project was to let users chat in privacy. Implemented user sign- up, sign In; room Creation, Update, and Deletion (CRUD). Also, users were able to delete messages. Used SQL, relational database to store users’data. The following technologies were used: Django and SQL for the back end and templates, JavaScript, Vanilla CSS, Materialize, Bootstrap, and TailWindCSS were utilized for the front end.
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-2">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Django | SQL | Templates | JavaScript | CSS | Materialize | Bootstrap | TailWindCSS</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-2">
                         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                              <img class=" w-max-sm mx-1  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={youtube}
                                   alt=""/>
                              <div class="p-2 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-2">Ads-Free-YouTube-Clone</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Added a filter to block interrupting ads. We utilized YouTube APIs, React, Vanilla JavaScript, CSS, Materials UI, and Bootstrap on the front end, and express, passport, and MongoDB on the backend.
                                   </li>
                                   <li>
                                        Allowed the user to use the app without signing up/in or signing up/in. By signing in the user would be able to create playlists, like videos... Additionally, we made our app mobile responsive so users could be able to use the app on their mobile devices.
                                   </li>
                                   <li>
                                        Collaborated with a team of 4 software engineers in a 2-week sprint...
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-2">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Django | SQL | Templates | JavaScript | CSS | Materialize | Bootstrap | TailWindCSS</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-2">
                         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                              <img class=" w-max-sm mx-1  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={chatApp}
                                   alt=""/>
                              <div class="p-2 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-2">Real-Time Chat App</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Created an application that enabled users to chat in real time. The goal of the project was to let users chat in privacy. Implemented user sign- up, sign In; room Creation, Update, and Deletion (CRUD). Also, users were able to delete messages. Used SQL, relational database to store users’data. The following technologies were used: Django and SQL for the back end and templates, JavaScript, Vanilla CSS, Materialize, Bootstrap, and TailWindCSS were utilized for the front end. Did project documentation in README.
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-2">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Django | SQL | Templates | JavaScript | CSS | Materialize | Bootstrap | TailWindCSS</p>
                              </div>
                         </div>
                    </div>

                    <div class="flex justify-center mb-2">
                         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                              <img class=" w-max-sm mx-1  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={chatApp}
                                   alt=""/>
                              <div class="p-2 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-2">Real-Time Chat App</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Created an application that enabled users to chat in real time. The goal of the project was to let users chat in privacy. Implemented user sign- up, sign In; room Creation, Update, and Deletion (CRUD). Also, users were able to delete messages. Used SQL, relational database to store users’data. The following technologies were used: Django and SQL for the back end and templates, JavaScript, Vanilla CSS, Materialize, Bootstrap, and TailWindCSS were utilized for the front end. Did project documentation in README.
                                   </li>
                                   <h6 class="text-gray-900 text-xl text-center font-medium mb-2">Technologies</h6>
                                   <p class="text-gray-600 italic text-center">Django | SQL | Templates | JavaScript | CSS | Materialize | Bootstrap | TailWindCSS</p>
                              </div>
                         </div>
                    </div>


               </div>

          </div>
     );
}

export default Projects;
