import React from 'react';
import chatApp from '../images/mobile.gif'

const Projects = () => {
     return (
          <div className="">
               <div className="grid h-screen mx-1 place-items-center">
                    <div class="flex justify-center">
                         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                              <img class=" w-full mx-1  h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                   src={chatApp}
                                   alt=""/>
                              <div class="p-2 flex flex-col justify-start w-max-sm">
                                   <h5 class="text-gray-900 text-xl text-center font-medium mb-2">Real-Time Chat App</h5>

                                   <li class="text-gray-700 text-base mb-4">
                                        Created an application that enabled users to chat in real time. The goal of the project was to let users chat in privacy. Implemented user sign- up, sign In; room Creation, Update, and Deletion (CRUD). Also, users were able to delete messages. Used SQL, relational database to store users’data. The following technologies were used: Django and SQL for the back end and templates, JavaScript, Vanilla CSS, Materialize, Bootstrap, and TailWindCSS were utilized for the front end. Did project documentation in README.
                                   </li>

                                   <p class="text-gray-600 italic">Last updated 3 mins ago</p>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
}

export default Projects;
