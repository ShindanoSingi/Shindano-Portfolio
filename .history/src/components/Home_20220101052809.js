import React from 'react';
// import Header from './Header';
// import Particles from './Particles';
import Navbar from './Navbar';
import About from './About';
import Awards from './Awards';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import MyPhoto from './MyPhoto';
import Projects from './Projects';
import Skills from './Skills';
import './Home.css'

const Home = () => {
     return (

          <div className="flex flex-col min-h-screen font-sans font-light  gap-4 py-[5rem]  bg-black">
               <div className="flex flex-row">
                    <Navbar className="hidden lg:block"/>
                    <div className="flex flex-col">
                         <MyPhoto/>
                         <About/>
                         <Experience/>
                         <Projects/>
                         <Skills/>
                         <Awards/>
                         <Education/>
                         <Contact/>
                    </div>
               </div>
          </div>


     // <div className='bg-orange-400'>
     // <Particles />
     // <React.Fragment >
     //     <Header />
     //     <Particles />
     // </React.Fragment>
     // </div>

     );
}

export default Home;
