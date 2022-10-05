import React from "react";
import {Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import "./App.css";
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import MyPhoto from './components/MyPhoto';
import Education from './components/Education';
import Home from './components/Home';


function App() {
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
                         component={About}/> {/* <Route exact path="/portfolio"
                         component={Home}/> */}
                    <Route exact path="/contact"
                         component={Contact}/>
                    <Route exact path="/education"
                         component={Education}/>
               </Switch>
          </React.Fragment>
     );
}

export default App;
