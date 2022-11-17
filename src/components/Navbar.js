import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/core";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonIcon from "@mui/icons-material/Person";
import TableChartIcon from "@mui/icons-material/TableChart";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import avatar from "../images/avatar.png";
import pdf from "../images/pdf.pdf";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: "slategray",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.87)"
  },

  bottomNavContainer: {
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.2rem"
  },

  bottomNavContainer1: {
    background: "#222",
    display: "flex",
    position: "relative",
    left: "1vw",
    alignItems: "center",
    padding: "0.2rem"
  },
  bottomNavContainer2: {
    background: "#222",
    display: "flex",
    position: "relative",
    left: "2vw",
    alignItems: "center",
    padding: "0.2rem"
  },
  root1: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      fontSize: "2.2rem",
      "&:hover": {
        fill: "tomato",
        fontSize: "2.5rem"
      }
    }
  },

  ["@media (min-width:320px) and (max-width:480px)"]: {
    root2: {
      "& .MuiSvgIcon-root": {
        fill: "tan",
        visibility: "hidden",
        fontSize: "2.2rem",
        "&:hover": {
          fill: "tomato",
          fontSize: "2.5rem"
        }
      }
    },
    root3: {
      "& .MuiSvgIcon-root": {
        fill: "tan",
        visibility: "hidden",
        fontSize: "2.2rem",
        "&:hover": {
          fill: "tomato",
          fontSize: "2.5rem"
        }
      }
    }
  },

  ["@media (min-width:481px)"]: {
    root2: {
      "& .MuiSvgIcon-root": {
        fill: "tan",
        visibility: "block",
        fontSize: "2.2rem",
        "&:hover": {
          fill: "tomato",
          fontSize: "2.5rem"
        }
      }
    },
    root3: {
      "& .MuiSvgIcon-root": {
        fill: "tan",
        visibility: "block",
        fontSize: "2.2rem",
        "&:hover": {
          fill: "tomato",
          fontSize: "2.5rem"
        }
      }
    }
  },

  appbar: {
    background: "#222",
    height: "4rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100vw",
    justifyContent: "space-between",
    padding: "0 2rem",
    gap: "2rem"
  },

  menuSliderContainer: {
    width: "fit",
    background: "#220",
    height: "100%"
  },

  listItem: {
    color: "tan"
  },
  avatar: {
    width: "4rem",
    height: "4rem",
    backgroundColor: "black"
  }
}));

const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <PersonIcon />,
    listText: "About",
    listPath: "/about"
  },
  {
    listIcon: <AutoGraphIcon />,
    listText: "Experience",
    listPath: "/experience"
  },
  {
    listIcon: <TableChartIcon />,
    listText: "Projects",
    listPath: "/projects"
  },
  {
    listIcon: <EqualizerIcon />,
    listText: "Skills",
    listPath: "/skills"
  },
  {
    listIcon: <StarIcon />,
    listText: "Awards",
    listPath: "/awards"
  },
  {
    listIcon: <SchoolIcon />,
    listText: "Education",
    listPath: "/education"
  },
  {
    listIcon: <EmailIcon />,
    listText: "Contact",
    listPath: "/contact"
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Link to={"/myphoto"}>
        <div className="flex items-center justify-center gap-4 pt-2 text-white">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Shindano Singi"
          />
          <div>
            <h3 className="font-bold">Shindano Singi</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </Link>

      <Divider />
      <List>
        {" "}
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}{" "}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}{" "}
      </List>
      <a
        href={pdf}
        target="_blank"
        download="Download Resume"
        rel="noopener noreferrer"
      >
        <div className="flex gap-8 ml-4">
          <DownloadIcon className="bg-[tan] " />
          <p className="text-[tan] text-[1rem] font-sans font-medium">
            Download Resume
          </p>
        </div>
      </a>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar className={classes.appbar}>
          <div className="flex items-center gap-2">
            <i
              className="ri-menu-line text-[tomato] text-[2rem] hover:text-[2.2rem]"
              onClick={() => setOpen(true)}
            ></i>
            <h1
              className="text-[tan] text-[1.5rem] hover:text-[tomato]"
              onClick={() => setOpen(true)}
            >
              Portfolio
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[tan] w-[4.5rem] text-[#222]  hover:bg-[tomato] hidden sm:block   p-1 px-2 rounded-lg">
              <Link to={"/projects"}>Projects</Link>
            </div>

            <div className="bg-[tan] text-[#222]  hover:bg-[tomato] px-2 hidden md:block  p-1 rounded-lg">
              <Link to={"/skills"}>Skills</Link>
            </div>

            <div className="bg-[tan] text-[#222]  hover:bg-[tomato] px-2  p-1 rounded-lg">
              <Link to={"/contact"}>Contact</Link>
            </div>

            <a href="mailTo:shindanosingi1@gmail.com">
              <div className=" bg-[tan] text-[#222]  hover:bg-[tomato]  hidden md:block rounded-lg p-0.5 w-[6.5rem]  px-2 items-center">
                <EmailIcon />
                Email Me
              </div>
            </a>

            <a
              href={pdf}
              target="_blank"
              download="Download Resume"
              rel="noopener noreferrer"
            >
              <div className="bg-[tan] text-[#222] hidden sm:block  hover:bg-[tomato] w-24  p-0.5 rounded-lg">
                <span>
                  <DownloadIcon />
                </span>
                Resume
              </div>
            </a>

            <a
              href="https://github.com/ShindanoSingi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill text-[tan] text-[2.2rem] hidden md:block hover:text-[tomato] hover:text-[2.5rem]"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/shindano-singi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-fill  text-[tan] text-[2.2rem] hidden md:block hover:text-[tomato] hover:text-[2.5rem]"></i>
            </a>
          </div>
        </AppBar>
      </Box>
      <Drawer
        className="overflow-y-auto"
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
