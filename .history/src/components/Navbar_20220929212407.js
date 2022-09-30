import React, {useState} from "react";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import {makeStyles} from "@material-ui/core/styles";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PersonIcon from '@mui/icons-material/Person';
import TableChartIcon from '@mui/icons-material/TableChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import avatar from '../images/avatar.png'


import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
     appbar: {
          background: "#222",
          margin: 0,
          display: "flex",
          flexDirection: "row",
          textAlign: "center"
     },
     arrow: {
          color: "tomato"
     },
     title: {
          color: "tan"
     },
     menuSliderContainer: {
          width: 'fit',
          background: "#220",
          height: "100%"
     },

     listItem: {
          color: "tan"
     },
     avatar: {
          width: "3rem",
          height: "3rem",
          backgroundColor: "black"
     }
}));

const menuItems = [
     {
          listIcon: <HomeIcon/>,
          listText: "Home",
          listPath: "/"
     },
     {
          listIcon: <PersonIcon/>,
          listText: "About",
          listPath: "/about"
     },
     {
          listIcon: <AutoGraphIcon/>,
          listText: "Experience",
          listPath: "/experience"
     },
     {
          listIcon: <TableChartIcon/>,
          listText: "Projects",
          listPath: "/projects"
     }, {
          listIcon: <EqualizerIcon/>,
          listText: "Skills",
          listPath: "/skills"
     }, {
          listIcon: <StarIcon/>,
          listText: "Awards",
          listPath: "/awards"
     }, {
          listIcon: <SchoolIcon/>,
          listText: "Education",
          listPath: "/education"
     }, {
          listIcon: <EmailIcon/>,
          listText: "Contact",
          listPath: "/contact"
     }, {
          listIcon: <AppsIcon/>,
          listText: "Portfolio",
          listPath: "/portfolio"
     }, {
          listIcon: <DescriptionIcon/>,
          listText: "Resume",
          listPath: "/resume"
     },
]

const Navbar = () => {
     const [open, setOpen] = useState(false);

     const classes = useStyles();

     const sideList = () => (
          <Box className={
                    classes.menuSliderContainer
               }
               component="div">
               <Link to={'/myphoto'}>
                    <div className="flex items-center justify-center gap-4 pt-2 text-white">
                         <Avatar className={
                                   classes.avatar
                              }
                              src={avatar}
                              alt="Shindano Singi"/>
                         <div>
                              <h3 className="font-bold">Shindano Singi</h3>
                              <p>Full Stack Developer</p>
                         </div>
                    </div>
               </Link>

               <Divider/>
               <List> {
                    menuItems.map((item, i) => (
                         <ListItem button
                              key={i}
                              className={
                                   classes.listItem
                              }
                              onClick={
                                   () => setOpen(false)
                              }
                              component={Link}
                              to={
                                   item.listPath
                         }>
                              <ListItemIcon className={
                                   classes.listItem
                              }>
                                   {
                                   item.listIcon
                              } </ListItemIcon>
                              <ListItemText primary={
                                   item.listText
                              }/>
                         </ListItem>
                    ))
               } </List>
          </Box>
     );

     return (
          <React.Fragment>
               <Box component="nav">
                    <AppBar position="fixed"
                         className={
                              classes.appbar
                    }>
                         <Toolbar>
                              <IconButton onClick={
                                   () => setOpen(true)
                              }>
                                   <ArrowBackIcon className={
                                        classes.arrow
                                   }/>
                              </IconButton>
                              <Typography variant="h5"
                                   className={
                                        classes.title
                              }>
                                   Portfolio
                              </Typography>

                         </Toolbar>
                         <div className="invisible md:flex md:justify-center md:visible">
                              <div>My Apps</div>
                              <div>Skills</div>
                              <div className="flex gap-2">
                                   <div className="visible">Contact Me</div>
                                   <div className="visible">Resume</div>
                              </div>
                         </div>
                    </AppBar>
               </Box>
               <Drawer open={open}
                    anchor="left"
                    onClose={
                         () => setOpen(false)
               }>
                    {
                    sideList()
               }
                    <Footer/>
               </Drawer>
          </React.Fragment>
     );
};

export default Navbar;
