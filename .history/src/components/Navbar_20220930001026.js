from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import avatar from '../images/avatar.png'
import {GitHub, LinkedIn, Twitter} from '@mui/icons-material'
import {BottomNavigationAction} from '@mui/material'
import pdf from '../images/pdf.pdf';


import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
     aboutContainer: {
          backgroundColor: "slategray",
          minHeight: "100vh",
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.87)'
     },

     bottomNavContainer: {
          background: "#222",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: "0.2rem"
     },

     bottomNavContainer1: {
          background: "#222",
          display: 'flex',
          position: 'relative',
          left: "1vw",
          alignItems: 'center',
          padding: "0.2rem"
     },
     bottomNavContainer2:
