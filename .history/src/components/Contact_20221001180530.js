import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then((result) => {
               console.log(result.text);
          }, (error) => {
               console.log(error.text);
          });
     };
     return (
          <div className="grid place-content-center  min-h-screen bg-[#050505] pb-4">
               <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center   bg-teal-800">
                    <h5 class="text-white align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">CONTACT</h5>
               </div>
               <a href="mailto:shindanosingi1@gmail.com">
                    <button className=" bg-blue-600">Contact me</button>
               </a>
               <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm h-fit mx-2">
                    <div className="flex justify-evenly">
                         <form>
                              <div class="form-group mb-6">
                                   <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Your Name</label>
                                   <input type="text" name='user_name' class="form-control marker:block w-full px-3 py-1.5 text-base font-normal ext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                              </div>
                              <div class="form-group mb-6">
                                   <label for="exampleInputEmail1" type="email" name="user_email" class="form-label inline-block mb-2 text-gray-700">Your Email address</label>
                                   <input type="email" class="form-control marker:block w-full px-3 py-1.5 text-base font-normal ext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                              </div>
                              <div class="form-group mb-6">
                                   <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Message</label>
                                   <textarea cols="30" name="message" rows="5" type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Type your message"/>
                              </div>
                              <button type="submit" value="Send" class="px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                         </form>

                    </div>
                    <div>
                         <button>dsdsds</button>
                         <button>dsdsds</button>
                         <button>dsdsds</button>
                         <button>dsdsds</button>

                    </div>

               </div>
          </div>
     );
}

export default Contact;
