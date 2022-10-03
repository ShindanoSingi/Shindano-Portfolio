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
     return (<div className="grid place-content-center  min-h-screen bg-[#050505] pb-4">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm h-fit mx-2">
               <form>
                    <div class="form-group mb-6">
                         <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Email address</label>
                         <input type="email" class="form-control marker:block w-full px-3 py-1.5 text-base font-normal ext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group mb-6">
                         <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Password</label>
                         <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group mb-6">
                         <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Message</label>
                         <<textareacols="30"rows="10"type="password"class="form-controlblockw-fullpx-3py-1.5text-basefont-normaltext-gray-700bg-whitebg-clip-paddingborderborder-solidborder-gray-300roundedtransitionease-in-outm-0focus:text-gray-700focus:bg-whitefocus:border-blue-600focus:outline-none"id="exampleInputPassword1"placeholder="Password"/></div><buttontype="submit"class="px-6py-2.5bg-blue-600text-whitefont-mediumtext-xsleading-tightuppercaseroundedshadow-mdhover:bg-blue-700hover:shadow-lgfocus:bg-blue-700focus:shadow-lgfocus:outline-nonefocus:ring-0active:bg-blue-800active:shadow-lgtransitionduration-150ease-in-out">Submit</button></form></div></div>
                    );
               }

               export default Contact;
