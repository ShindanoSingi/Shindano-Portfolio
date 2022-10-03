import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";


const Contact = ({onNameChange, onMessageChange, onEmailChange, handleSubmit}) => { // const classes = useStyles();
     return (
          <div className="min-h-screen font-sans font-light  gap-4 bg-black">
               <form onSubmit={handleSubmit}
                    method="POST">
                    <div className="py-[2rem] mt-[3rem] flex flex-col items-center ">
                         <div className="form-group">
                              <label className="text-cyan-50">Name</label>
                              <input type="text" className="form-control"/>
                         </div>
                         <div className="text-cyan-50">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" aria-describedby="emailHelp"/>
                         </div>
                         <div className="text-cyan-50">
                              <label htmlFor="message">Message</label>
                              <textarea className="form-control" minRows="5"></textarea>
                         </div>
                         <button type="submit" className="text-cyan-50">Submit</button>
                    </div>
               </form>
          </div>
     );
};

export default Contact;
