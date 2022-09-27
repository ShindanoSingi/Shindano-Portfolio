import {makeStyles} from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'

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
     }
}))


const MyPhoto = () => { // const classes = useStyles();
     return (
          <div className='bg-zinc-900 h-[100vh] tablet:bg-red-200'>
               <div className="translate-y-1/2 md:relative top-1/2 ">
                    <img src={avatar}
                         className="w-full h-full  lg:w-[30rem] "
                         alt="Shindano Singi"/>
                    <div className="py-1 mx-2 bg-slate-600 md:bg-red-400 lg:bg-green-600 xl:bg-yellow-700 2xl:bg-cyan-300 bg-opacity-12">
                         <h2 className="mx-auto text-white text-2xl md:text-xl lg:text-2xl w-[90vw] text-center 2xl:text-2xl ">I want to
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
