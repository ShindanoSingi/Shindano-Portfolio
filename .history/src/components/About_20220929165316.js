import React from 'react';

const About = () => {
     return (
          <div className=" min-h-screen font-sans font-light  gap-4 py-[2rem] mt-[3rem] bg-black">
               <div class="flex justify-center  mt-[4rem] ">
                    <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-600">
                         <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">ABOUT</h5>
                    </div>
                    <div class="block p-2 md:p-4 text-base  font-sans  rounded-lg xl:text-3xl xl:p-8 font-light  md:text-xl shadow-lg bg-white w-[92vw]">

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
                         <br/><br/><p className="mb-0.5">My current career as a Systems Engineer at Siemens brought me close to my true passion: Full Stack Developer. At Siemens, I design systems for projects that are worth about 1 million dollars using AutoCAD, Design and Commissioning tools, Microsoft Excel, Adobe Acrobat, and Bluebeam…  Also, I work in a group of 2 to 5 engineers on projects that are worth millions of dollars.</p><br/>
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
          </div>
     );
}

export default About;
