import {makeStyles} from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
     aboutContainer: {
          backgroundColor: "slategray",
          minHeight: "100vh",
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: 'center',
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

     aboutDiv: {
          backgroundColor: '#009688',
          fontSize: '3rem'
     },
     title: {
          color: "tomato"
     },
     subtitle: {
          color: "tan",
          textTransform: "uppercase"
     },
     typedContainer: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "black",
          width: "30rem",
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

               <div className="">
                    <img src={avatar}
                         className="w-full h-full lg:w-1/2 lg:mx-auto "
                         alt="Shindano Singi"/>
                    <div className="flex flex-col items-center justify-center md:w-[35rem] gap-6 py-2 mx-2 rounded-md lg:mx-auto md:mx-4 md:py-4 bg-slate-600">
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
                         <h2 className="mx-auto lg:text-4xl  text-white text-2xl md:text-4xl  w-[90vw] text-center 2xl:text-4xl ">I want to
                              <span className="bg-[#008073] mx-1 px-1">
                                   make things
                              </span><br/>
                              that
                              <span className="mx-1 underline decoration-[#008073]">
                                   make a difference
                              </span>
                         </h2>
                    </div>
               </div>

          </div>
     );
}

export default MyPhoto;
