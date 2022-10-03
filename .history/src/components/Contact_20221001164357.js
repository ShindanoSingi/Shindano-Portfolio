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
          <div className="grid  min-h-screen bg-[#050505] pb-4">
               <form ref={form}
                    className="flex flex-col w-96 mx-auto"
                    onSubmit={sendEmail}>
                    <label className="text-cyan-50">Name</label>
                    <input type="text" name="user_name"/>
                    <label className="text-cyan-50">Email</label>
                    <input type="email" name="user_email"/>
                    <label className="text-cyan-50">Message</label>
                    <textarea name="message"/>
                    <button className="text-cyan-50" type="submit" value="Send">Send</button>
               </form>
          </div>
     );
}

export default Contact;
