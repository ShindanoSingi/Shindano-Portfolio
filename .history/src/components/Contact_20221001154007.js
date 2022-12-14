import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
     contactContainer: {
          background: "#233",
          height: "100vh"
     },
     heading: {
          color: "tomato",
          fontSize: "1rem",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: "1rem"
     },
     form: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute"
     },
     input: {
          color: "#fff"
     },
     button: {
          marginTop: "1rem",
          color: "tomato",
          borderColor: "tan"
     },
     field: {
          margin: "1rem 0rem"
     }
}));

const InputField = withStyles({
     root: {
          "& label.Mui-focused": {
               color: "tomato"
          },
          "& label": {
               color: "tan"
          },
          "& .MuiOutlinedInput-root": {
               "& fieldset": {
                    borderColor: "tan"
               },
               "&:hover fieldset": {
                    borderColor: "tan"
               },
               "&.Mui-focused fieldset": {
                    color: "#fff",
                    borderColor: "tan"
               }
          }
     }
})(TextField);

const Contact = ({onNameChange, onMessageChange, onEmailChange, handleSubmit}) => {
     const classes = useStyles();
     return (
          <div className='search-icon-and-input-box bg-black'>
               <Button className={
                         classes.form
                    }
                    onClick={handleSubmit}
                    type='submit'/>
               <form onSubmit={handleSubmit}
                    className="form">
                    {/* Search Input */}
                    <input autoFocus className="input-rounded" placeholder='Type your search' type='text' name='SearchString'
                         onChange={onNameChange}/>
               </form>
          </div>
     );
};

export default Contact;
