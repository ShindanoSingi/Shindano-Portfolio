import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {GitHub, Twitter, LinkedIn} from '@mui/icons-material'
import {BottomNavigationAction} from '@mui/material'
import {makeStyles} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import pdf from '../images/pdf.pdf';
import DownloadIcon from '@mui/icons-material/Download';


const useStyles = makeStyles((theme) => ({
     root: {
          "& .MuiSvgIcon-root": {
               fill: "tan",
               fontSize: "3.2rem",
               "&:hover": {
                    fill: "tomato",
                    fontSize: "3.5rem"
               }
          }
     }
}))

const Contact = () => {
     const classes = useStyles();
     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_e2eqm5a', 'template_2twchxb', form.current, 'pNVbpstluPDpZ6L20').then((result) => {
               console.log("Message Sent");
          }, (error) => {
               console.log(error.text);
          });
          e.target.reset();

     };


     return (

          <div className="grid place-content-center  min-h-screen bg-[#050505] pb-4">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-800">
                    <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">CONTACT</h5>
               </div>
               <div className="flex fle-col mx-auto">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm h-fit mx-2">
                         <div className="flex justify-evenly">
                              <form ref={form}
                                   onSubmit={sendEmail}>
                                   <div class="form-group mb-6">
                                        <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Your Name</label>
                                        <input type="text" name='user_name' class="form-control marker:block w-full px-3 py-1.5 text-base font-normal ext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
                                   </div>
                                   <div class="form-group mb-6">
                                        <label for="exampleInputEmail1" type="email" name="user_email" class="form-label inline-block mb-2 text-gray-700">Your Email address</label>
                                        <input type="email" class="form-control marker:block w-full px-3 py-1.5 text-base font-normal ext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                                   </div>
                                   <div class="form-group mb-6">
                                        <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Message</label>
                                        <textarea cols="30" name="message" rows="5" type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Type your message"/>
                                   </div>
                                   <button type="submit" value="Send" class="px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                              </form>

                         </div>


                    </div>

                    <div className=" p-6 rounded-lg shadow-lg bg-stone-700 h-[1/2] max-w-sm justify-evenly flex flex-col items-center">
                         <a href="mailTo:shindanosingi1@gmail.com">
                              <div className="bg-[tan] text-[#222]  text-lg text-center font-medium font-sans w-[9rem]  h-12 py-3  px-0.5 rounded-lg">
                                   <EmailIcon/>
                                   Email Me
                              </div>
                         </a>

                         <a href={pdf}
                              target="_blank"
                              download='Download Resume'
                              rel='noopener noreferrer'>
                              <div className="bg-[tan] text-[#222]  text-lg text-center font-medium font-sans w-[9rem]  h-12 py-3  px-0.5 rounded-lg">
                                   <span><DownloadIcon/></span>
                                   Resume</div>
                         </a>
                         <a href="https://github.com/ShindanoSingi" target="_blank" rel='noopener noreferrer'>
                              <BottomNavigationAction icon={<GitHub/>}
                                   className={
                                        classes.root
                                   }/>
                         </a>
                         <a href="https://twitter.com/Shindano_Singi" target="_blank" rel='noopener noreferrer'>
                              <BottomNavigationAction icon={<Twitter/>}
                                   className={
                                        classes.root
                                   }/>
                         </a>
                         <a href="https://www.linkedin.com/in/shindano-singi/" target="_blank" rel='noopener noreferrer'><BottomNavigationAction icon={<LinkedIn/>}
                                   className={
                                        classes.root
                                   }/></a>
                    </div>

               </div>
          </div>

     );
}

export default Contact;
