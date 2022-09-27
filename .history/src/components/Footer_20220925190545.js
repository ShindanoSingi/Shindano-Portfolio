import {BottomNavigation, makeStyles} from '@material-ui/core'
import {GitHub, LinkedIn, Twitter} from '@mui/icons-material'
import {BottomNavigationAction} from '@mui/material'
import React from 'react'

const useStyles = makeStyles({
     bottomNavContainer: {
          background: "#222"
     },
     root1: {
          "& .MuiSvgIcon-root": {
               fill: "tan",
               "&:hover": {
                    fill: "tomato",
                    fontSize: "1.8rem"
               }
          }
     },
     root2: {
          "& .MuiSvgIcon-root": {
               fill: "tan",
               "&:hover": {
                    fill: "tomato",
                    fontSize: "1.8rem"
               }
          }
     },
     root3: {
          "& .MuiSvgIcon-root": {
               fill: "tan",
               "&:hover": {
                    fill: "tomato",
                    fontSize: "1.8rem"
               }
          }
     }
});

const Footer = () => {
     const classes = useStyles();
     return (
          <BottomNavigation className={
               classes.bottomNavContainer
          }>
               <a href="https://twitter.com/Shindano_Singi" target="_blank" rel='noopener noreferrer'>
                    <BottomNavigationAction icon={<Twitter/>}
                         className={
                              classes.root1
                         }/>
               </a>
               <a href="https://github.com/ShindanoSingi" target="_blank" rel='noopener noreferrer'>
                    <BottomNavigationAction icon={<GitHub/>}
                         className={
                              classes.root2
                         }/>
               </a>
               <a href="https://www.linkedin.com/in/shindano-singi/" target="_blank" rel='noopener noreferrer'><BottomNavigationAction icon={<LinkedIn/>}
                         className={
                              classes.root3
                         }/></a>
          </BottomNavigation>
     )
}

export default Footer
