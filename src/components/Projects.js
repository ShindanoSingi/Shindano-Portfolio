import React from "react";
import youtube from "../images/youtube.gif";
import userM from "../images/userM.png";
import weather from "../images/weather.gif";
import Trivia from "../images/Trivia.png";
import poormantwitter from "../images/poormantwitter.gif";
import expensesTracker from "../images/expenses.png";
import chatApp from "../images/chat-app.gif";
import todos from "../images/Todos.gif";

const Projects = () => {
    return (<
        div className="grid min-h-full place-items-center bg-[#dcd8d8]" >
        <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full  justify-center text-white py-2   bg-teal-800">
            <h5 class=" align-baseline py-2 leading-tight font-sans font-light text-2xl  text-center">
                PROJECTS
            </h5>
        </div>
        <div className="flex flex-col min-h-full  px-2 font-sans font-light py-2  gap-4 pt-[4rem]  bg-black  min-w-full">
            <div class="flex justify-center pt-20" >
                <div class="flex flex-col font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg">
                    <div className="flex items-center justify-center gap-4" >
                        <div>

                            <a href="https://bembe-chat.onrender.com/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                    src={chatApp}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>

                    <div class="p-4 flex flex-col items-center font-sans font-light justify-start w-max-sm">
                        <h5 class="text-gray-900 text-2xl text-center font-sans font-medium  mb-0 uppercase">
                            Real - Time Chat App
                        </h5>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://bembe-chat.onrender.com/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                Live
                            </a>
                            <a href="https://github.com/ShindanoSingi/chat-app"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li className="text-gray-700 md:text-lg font-sans font-light  text-xl mb-4" >
                            Created an application that enabled users to chat in real time. The goal of the project was to
                            let users chat in privacy.
                            Implemented user sign up, sign In, Userlist, Chats/Messages; added others features such as sending Emojis, images, users' online and offline statuses.
                        </li>
                        <h6 class="text-gray-900 text-2xl  font-sans font-medium text-center  mb-4">
                            Technologies
                        </h6>
                        <p class="text-gray-600 italic text-xl md:text-lg font-sans font-light  text-center" >
                            Express | React | Node | Socket.io | MongoDB | Material UI | JavaScript | Vanilla CSS | Bootstrap | TailWindCSS | onRender
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mb-4" >
                <div class="flex flex-col font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg" >
                    <div class="p-4 flex flex-col items-center md:text-lg justify-start w-max-sm" >
                        <div className="flex items-center justify-center gap-4 mb-4" >
                            <a href="https://bembe-tube.web.app"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                    src={youtube}
                                    alt=""
                                />
                            </a>
                        </div>
                        <a href="https://bembe-tube.web.app"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <h5 class="text-gray-900 text-2xl text-center font-sans font-medium mb-0 uppercase" >
                                Ads - Free - YouTube Clone
                            </h5>
                        </a>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://bembe-tube.web.app"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                Live
                            </a>
                            <a href="https://github.com/ShindanoSingi/bembe-tube"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light  text-xl md:text-lg mb-4" >
                            Added a filter to block interrupting ads.Utilized YouTube APIs,
                            React, Vanilla JavaScript, CSS, Materials UI, and Bootstrap on the front end, and express, passport, and MongoDB on the backend.
                        </li>
                        <li class="text-gray-700 text-xl md:text-lg font-sans font-light  mb-4" >
                            Allowed the user to use the app without signing up / in or signing up / in .By signing in the user would be able to create playlists,
                            like videos...Additionally, we made our app mobile responsive so users could be able to use the app on their mobile devices.
                        </li>
                        <li class="text-gray-700 text-xl font-sans font-light md:text-lg mb-4" >
                            Collaborated with a team of 4 software engineers in a 2 - week sprint...
                        </li>
                        <h6 class="text-gray-900 text-2xl font-sans font-medium text-center mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl md:text-lg font-sans font-light  italic text-center" >
                            React | CSS | YouTube APIs | Vanilla JavaScript | Materials UI |
                            Bootstrap
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center mb-4" >
                <div class="flex flex-col md:text-lg font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg" >
                    <div className="flex items-center justify-center gap-4" >
                        <a href="https://bembe-tube.web.app"
                            target="_blank"
                            className="text-md underline text-blue-700"
                            rel="noopener noreferrer">
                            <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={expensesTracker}
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="p-4 flex flex-col items-center justify-start w-max-sm" >
                        <h5 class="text-gray-900 text-center text-2xl font-sans font-medium mb-0 uppercase" >
                            Revenue And Expenses Tracker
                        </h5>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://github.com/ShindanoSingi/frontend"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light text-xl  mb-4" >
                            Created a full - stack web application(Revenue And Expenses Tracker) using SQL
                            for the {" "}
                            <a className="text-blue-500"
                                href="https://github.com/ShindanoSingi/backend"
                                target="_blank"
                                rel="noopener noreferrer" >
                                backend
                            </a> {""}, and React, CSS, HTML, bootstrap, CSS and Javascript
                            for the {" "}
                            <a className="text-blue-500"
                                href="https://github.com/ShindanoSingi/frontend"
                                target="_blank"
                                rel="noopener noreferrer" >
                                frontend
                            </a>{" "}
                            for a client living in Africa.
                        </li>
                        <li class="text-gray-700 font-sans font-light text-xl  mb-4" >
                            The super user creates users to
                            let them report revenues and
                            expenses.The language used is Swahili(African language).
                        </li>
                        <h6 class="text-gray-900 text-2xl font-sans font-medium text-center mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl font-sans font-light  md:text-lg  italic text-center" >
                            SQL | Django | React | CSS | Vanilla JavaScript | bootstrap
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mb-4">
                <div class="flex flex-col md:text-lg font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg">
                    <div className="flex items-center justify-center gap-4" >
                        <a href="https://bembe-tube.web.app"
                            target="_blank"
                            className="text-md underline text-blue-700"
                            rel="noopener noreferrer">
                            <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={poormantwitter}
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="p-4 flex flex-col items-center justify-start w-max-sm" >
                        <h5 class="text-gray-900 text-center text-2xl font-sans font-medium mb-0 uppercase" >
                            Poor Man 's Twitter
                        </h5>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://github.com/ShindanoSingi/poor-man-twitter"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light text-xl  mb-4" >
                            Created a single - page full - stack web application(poor man’ s Twitter) using SQL
                            for the backend, Vue, CSS, TailwindCSS,
                            bootstrap, CSS, and Javascript
                            for the front end.
                        </li>
                        <h6 class="text-gray-900 text-2xl font-sans font-medium text-center mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl font-sans font-light  md:text-lg  italic text-center" >
                            SQL | Django | Vue | CSS | Vanilla JavaScript | Templates |
                            bootstrap
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mb-4" >
                <div class="flex flex-col md:text-lg font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg" >
                    <div className="flex items-center justify-center gap-4" >
                        <a href="https://bembe-todo-ed171.web.app/"
                            target="_blank"
                            className="text-md underline text-blue-700"
                            rel="noopener noreferrer">
                            <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={todos}
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="p-4 flex flex-col items-center justify-start w-max-sm" >
                        <h5 class="text-gray-900 text-2xl text-center font-sans font-medium mb-0 uppercase" >
                            User Management System
                        </h5>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://bembe-todo-ed171.web.app/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                Live
                            </a>
                            <a href="https://github.com/ShindanoSingi/mern-todo-app/tree/master"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light text-xl md:text-lg  mb-4" >
                            Made RESTful API fetch calls to an Express, MongoDB, Node.js backend
                        </li>
                        <li class="text-gray-700 font-sans font-light text-xl  md:text-lg  mb-4" >
                            Created an application that utilized fetch calls to YouTube videos API.Implemented a user management system to
                            let the user
                            create an account so they could be able to sign in and access the YouTube app that I customized to play videos without ads.
                        </li>
                        <li class="text-gray-700 text-xl font-sans font-light  md:text-lg  mb-4" >
                            Used Vanilla Java Script, handlebars, EJS, CSS, bootstrap, and awesome fonts
                            for the front end.
                        </li>
                        <li class="text-gray-700 font-sans font-light text-xl md:text-lg mb-4" >
                            Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all Create, Read, Update and Delete(CRUD) operations, and tested all backend routes during development using Postman.
                        </li>
                        <li class="text-gray-700 font-sans font-light text-xl  md:text-lg  mb-4" >
                            Used Mongoose to define schemas
                            for MongoDB collections, and express
                            for the database.
                        </li>
                        <li class="text-gray-700 font-sans font-light text-xl  md:text-lg  mb-4" >
                            Implemented ES6 tagged template literals with styled - components along CSS3 to provide style and flex - box layout of the application.
                        </li>
                        <h6 class="text-gray-900 font-sans font-medium text-2xl text-center mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl font-sans font-light  md:text-lg  italic text-center" >
                            Express | MongoDB | Node.js | Vanilla JavaScript | handlebars |
                            EJS | CSS | bootstrap | awesome fonts
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mb-4" >
                <div class="flex flex-col font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg" >
                    <div className="flex items-center justify-center gap-4" >
                        <a href="https://bembe-weather.netlify.app/"
                            target="_blank"
                            className="text-md underline text-blue-700"
                            rel="noopener noreferrer">
                            <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={weather}
                                alt=""
                            />
                        </a>
                    </div>

                    <div class="p-4 flex flex-col items-center md:text-lg  justify-start w-max-sm" >
                        <a href="https://bembe-weather.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <h5 class="text-gray-900 text-2xl text-center font-sans font-medium mb-0 uppercase" >
                                Weather App
                            </h5>
                        </a>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://bembe-weather.netlify.app/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                Live
                            </a>
                            <a href="https://github.com/ShindanoSingi/bembe-weather"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light text-xl md:text-lg  mb-4" >
                            Created a worldwide weather app using weather API.The app utilized these technologies: React, CSS, materialize, and BootStrap.
                        </li>
                        <h6 class="text-gray-900 text-2xl font-medium font-sans text-center  mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl font-sans font-light  md:text-lg italic text-center" >
                            React | CSS | materialize | BootStrap | weather API | JavaScript | HTML | GitHub | Netlify | VS Code | Postman
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mb-4" >
                <div class="flex flex-col font-sans font-light p-2 md:py-6 md:max-w-3xl rounded-lg bg-white md:w shadow-lg" >
                    <div className="flex items-center justify-center gap-4" >
                        <a href="https://bembe-weather.netlify.app/"
                            target="_blank"
                            className="text-md underline text-blue-700"
                            rel="noopener noreferrer">
                            <img class=" w-[22rem] mx-auto h-full md:w-48  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={Trivia}
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="p-4 flex flex-col items-center md:text-lg justify-start w-max-sm" >
                        <a href="https://shindanosingi.github.io/bembe-trivia/"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <h5 class="text-gray-900 text-2xl text-center font-sans font-medium  mb-0 uppercase" >
                                Trivia
                            </h5>
                        </a>
                        <div className="flex gap-4 text-lg mb-4">
                            <a href="https://shindanosingi.github.io/bembe-trivia/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                Live
                            </a>
                            <a href="https://shindanosingi.github.io/bembe-trivia/"
                                target="_blank"
                                className="text-md underline text-blue-700"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <li class="text-gray-700 font-sans font-light md:text-lg text-xl mb-4" >
                            Designed a mobile responsive application that utilized an API,
                            Js, and HTML to generate questions and answers.The app had two modes: In the first mode, challenge mode, the user was being challenged based on the difficulty level selected.In the second mode, the learning mode, the user was learning; that is, the user should click on the answer button to see the answer.Used CSS to style the application.Reviewed Code prior to running the application.Did project documentation in README.Followed test procedures to successfully build the application.
                        </li>
                        <h6 class="text-gray-900 text-2xl text-center font-medium font-sans  mb-4" >
                            Technologies
                        </h6>
                        <p class="text-gray-600 text-xl font-sans font-light md:text-lg italic text-center" >
                            API | JavaScript | HTML | CSS | TailWindCSS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Projects;