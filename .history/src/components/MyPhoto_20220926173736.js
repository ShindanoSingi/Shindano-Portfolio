import {makeStyles} from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'

const useStyles = makeStyles((theme) => ({
     aboutContainer: {
          backgroundColor: "darkslategray",
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


const MyPhoto = () => {

     return (
          <div className=''>

               <h2 className="mx-0 text-white text-md md:text-xl lg:text-2xl w-[92vw] absolute top-32 text-center 2xl:text-2xl ">I want to
                    <span className=''>
                         make things
                    </span><br/>
                    <span className=''>that
                         <span className=''>
                              make a difference</span>
                    </span>
               </h2>


               <div className="mx-auto bg-[#EFEDEE]">
                    <img src={avatar}
                         className="w-[95vw]  lg:w-[30rem].
                                                                                                                                                                                                                                                                                                                                                                                                                                my-2 "
                         alt="Shindano Singi"/>
               </div>
          </div>

     );
}

export default MyPhoto;
