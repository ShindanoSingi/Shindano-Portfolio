import {makeStyles} from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'

const useStyles = makeStyles((theme) => ({
     aboutContainer: {
          backgroundColor: "darkolivegreen",
          minHeight: "100vh",
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'space-around',
          lineHeight: 1.5,
          fontFamily: "Roboto",
          fontWeight: 'normal',
          color: 'rgba(0, 0, 0, 0.87)'
     },

     span1: {
          backgroundColor: '#009688',
          textAlign: 'center',
          padding: '0  0.5rem',
          margin: '0 0.5rem'
     },

     span2: {
          textAlign: "center",
          padding: '0rem  0.2rem',
          margin: '0 0.5rem',
          boxShadow: 'inset 0 0 1500px rgba(250, 250, 255, .3)'
     },

     span3: {
          textDecoration: 'underline',
          textDecorationColor: '#4DD0E1',
          marginLeft: '0.5rem'
     },

     titleContainer: {
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          margin: '5rem  0.5rem 0rem 1rem'
     },

     aboutDiv: {
          backgroundColor: '#009688',
          fontSize: '3rem'
     }
}))


const About = () => {
     const classes = useStyles();
     return (
          <div className={
               classes.aboutContainer
          }>
               <div className={
                    classes.titleContainer
               }>
                    <h2 className="mx-0 text-sm md:text-xg w-[92vw] text-center 2xl:text-2xl ">I want to
                         <span className={
                              classes.span1
                         }>make things</span><br/>
                         <span className={
                              classes.span2
                         }>that
                              <span className={
                                   classes.span3
                              }>make a difference</span>
                         </span>
                    </h2>
               </div>

               <div className="mx-auto ">
                    <img src={avatar}
                         className=" w-[92vw] h-full md:h-4/6  my-2  rounded-lg"
                         alt="Shindano Singi"/>
               </div>
               <div class="flex justify-center">
                    <div class="block p-2 rounded-lg text-xs shadow-lg bg-white w-[92vw]">
                         <h5 class="text-gray-900 w-[92vw] text-lg leading-tight text-center font-medium mb-2">ABOUT</h5>
                         I am a
                         <span className="bg-[#009688] text-white  px-1 mx-1">
                              Full Stack Developer
                         </span>
                         with strong skills in both the
                         <span className="bg-[#009688] text-white  mx-1 px-1">backend</span>
                         and the
                         <span className="bg-[#009688] text-white px-1 mx-1">front-end</span>
                         of web applications. Capable of quickly learning and mastering new technologies and working in both team and self-directed settings. I love solving<span className="bg-[#009688] text-white  px-1 mx-1">algorithmically</span>
                         complex problems, and have passion for coding and building applications.
                         <br/><br/><p className="mb-0.5">My current career as a Systems Engineer at Siemens brought me close to my true passion: Full Stack Developer. At Siemens, I design systems for projects that are worth about 1 million dollars using AutoCAD, Design and Commissioning tools, Microsoft Excel, Adobe Acrobat, and Bluebeam…
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Also, I work in a group of 2 to 5 engineers on projects that are worth millions of dollars.
                         </p><br/>
                         <p>
                              In the next phase of my career, I want to use both my design skills and also work on the technically challenging facets of the application.
                         </p><br/>
                         <p>
                              I am seeking a role as a
                              <span className="bg-[#009688] text-white  px-1 mx-1">Full Stack Developer</span>,
                              <span className="bg-[#009688]text-white  px-1 mx-1">software engineer</span>
                              or
                              <span className="bg-[#009688] text-white px-1 mx-1">software developer</span>
                              at a company where I can learn, grow, and continue to master the craft.
                         </p>
                    </div>
               </div>

               {/* <div className="mt-1   text-xs  w-[95vw] px-1 text-white text-center">

        </div> */} </div>
     );
}

export default About;
