import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import "./App.css";
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import MyPhoto from './components/MyPhoto';
import Education from './components/Education';


function App() {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')
     // const [form, setForm] = useState({name: "dfdf", email: "sdsds", message: "dsdsds"});

     function onNameChange(event) {
          setName(event.target.value);
          console.log(name);
     };

     function onEmailChange(event) {
          setEmail(event.target.value);
          console.log(email);
     };

     function onMessageChange(event) {
          setMessage(event.target.value);
          console.log(message);
     };

     function handleSubmit(event) {
          event.preventDefault();
          e.preventDefault();
          fetch('http://localhost:3000/send', {
               method: "POST",
               body: JSON.stringify(this.state),
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          }).then((response) => (response.json())).then((response) => {
               if (response.status === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
               } else if (response.status === 'fail') {
                    alert("Message failed to send.")
               }
          })
          console.log(name)
          console.log(email)
          console.log(message)
          setName('')
          setEmail('')
          setMessage('')
     };
     return (
          <React.Fragment>
               <CssBaseline/>
               <Navbar/>
               <Switch>
                    <Route exact path="/"
                         component={MyPhoto}/>
                    <Route exact path="/myphoto"
                         component={MyPhoto}/>
                    <Route exact path="/awards"
                         component={Awards}/>
                    <Route exact path="/skills"
                         component={Skills}/>
                    <Route exact path="/experience"
                         component={Experience}/>
                    <Route exact path="/projects"
                         component={Projects}/>
                    <Route exact path="/about"
                         component={About}/>
                    <Route exact path="/portfolio"
                         component={Portfolio}/>
                    <Route exact path="/contact"
                         component={Contact}
                         onNameChange={onNameChange}
                         onMessageChange={onMessageChange}
                         onEmailChange={onEmailChange}
                         handleSubmit={handleSubmit}/>
                    <Route exact path="/education"
                         component={Education}/>
               </Switch>
          </React.Fragment>
     );
}

export default App;
