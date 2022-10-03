import {makeStyles} from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";


const useStyles = makeStyles((theme) => ({
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

     aboutDiv: {
          backgroundColor: '#009688',
          fontSize: '3rem'
     },
     title: {
          color: "tomato"
     },
     subtitle: {
          color: "tan",
          textAlign: 'center',
          textTransform: "uppercase"
     },

     typedContainer: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "black",
          width: "33rem",
          padding: "1rem",
          borderRadius: "2rem",
          textAlign: "center",
          boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .3)',
          zIndex: 1
     }
}))


const MyPhoto = () => {
     const classes = useStyles();
     return (
          <div className='grid h-screen font-sans font-light bg-black place-items-center'>
               <div className="flex flex-col items-center bg-black">
                    <img src={avatar}
                         className="w-5/6 h-full md:w-1/3 "
                         alt="Shindano Singi"/>
                    <div className="flex w-[95vw]  flex-col items-center justify-center gap-2 py-2 mx-2 rounded-md lg:w-max-lg md:py-4 bg-slate-600">
                         <div className="flex flex-col items-center justify-center">
                              <Typography className={
                                        classes.title
                                   }
                                   variant="h4">
                                   <Typed strings={
                                             ["Shindano Singi"]
                                        }
                                        typeSpeed={100}/>
                              </Typography>

                              <Typography className={
                                        classes.subtitle
                                   }
                                   variant="h5">
                                   <Typed strings={
                                             ["Frontend Developer", "Backend Developer", "Full Stack Developer",]
                                        }
                                        typeSpeed={100}
                                        backSpeed={50}
                                        loop/>
                              </Typography>
                         </div>
                         <h2 className=" lg:text-2xl  text-white text-base md:text-xl  w-[90vw] text-center 2xl:text-2xl ">I am a Full Stack Developer with strong skills in backend and front-end of web applications. Capable of quickly learning and mastering new technologies and working in both team and self-directed settings. I love solving algorithmically complex problems and have a passion for coding and building applications.
                         </h2>
                    </div>
               </div>


          </div>
     );
}

export default MyPhoto;
