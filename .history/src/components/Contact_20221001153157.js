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
          <form className={
               classes.contactContainer>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button type="submit">Submit</button>
        </form>


          <Box component="div"
               className={
                    classes.contactContainer
          }>
               <Grid container justifyContent="center">
                    <form component="form"
                         onSubmit={handleSubmit}
                         className={
                              classes.form
                    }>
                         <Typography variant="h5"
                              className={
                                   classes.heading
                         }>
                              Hire or Contact me...
                         </Typography>
                         <InputField fullWidth={true}
                              label="Name"
                              onChange={onNameChange}
                              variant="outlined"
                              inputProps={
                                   {className: classes.input}
                              }/>
                         <InputField fullWidth={true}
                              label="Email"
                              onChange={onEmailChange}
                              variant="outlined"
                              inputProps={
                                   {className: classes.input}
                              }
                              className={
                                   classes.field
                              }/>
                         <InputField fullWidth={true}
                              label="Message"
                              onChange={onMessageChange}
                              variant="outlined"
                              multiline
                              minRows={4}
                              inputProps={
                                   {className: classes.input}
                              }/>
                         <Button variant="outlined"
                              fullWidth={true}
                              type="submit"
                              onClick={handleSubmit}
                              endIcon={<Send/>}
                              className={
                                   classes.button
                         }>
                              Contact Me
                         </Button>
                    </form>
               </Grid>
          </Box>
     );
};

export default Contact;
