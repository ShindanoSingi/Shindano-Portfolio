import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  h1:{
    backgroundColor: "	saddlebrown",
    height: "100vh",
  }
}))

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.h1}>
      <h1 className='bg-black'>Hello</h1>
    </div>
  );
}

export default Skills;



// import React from 'react';
// import ProgressBar from "./ProgressBar";

// const Skills = () => {
//   const skills1 = [
//     { style: { flex: 0.9 }, nom: "HTML/CSS" },
//     { style: { flex: 0.75 }, nom: "JavaScript" },
//     { style: { flex: 0.7 }, nom: "Php" },
//     { style: { flex: 0.6 }, nom: "Java" }
//   ];
//   const skills2 = [
//     { style: { flex: 0.55 }, nom: "Android" },
//     { style: { flex: 0.75 }, nom: "MySql" },
//     { style: { flex: 1 }, nom: "Français" },
//     { style: { flex: 0.4 }, nom: "Anglais" }
//   ];
//   return (
//     <div className="w-screen text-center bg-black skills vertical-center">
//       <h1 className="text-white">Skills</h1>
//       <ProgressBar skills={skills1} />
//       <ProgressBar skills={skills2} />
//     </div>
//   );
// }

// export default Skills;
