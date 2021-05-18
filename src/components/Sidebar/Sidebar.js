import {Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
// import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily:"Montserrat"
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#043565",
    display: "flex",
    justifyContent:"center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    outline:"none",
    border:"none",
    '&:focus':{
      outline:"none",
      border:"none",
    },
    '&:active':{
      outline:"none",
      border:"none",
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#fff",
    padding:'0',
    boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  dropitems: {
    width: "100%",
  },
  headingblock: {
    background: "#fff",
    // borderLeft: "8px solid #fff",
    height: "32px",
    display: "flex",
    fontWeight:"700",
    alignItems:"center",
    fontSize:"14px",
    // justifyContent:"center",
    alignItems:"center",
    '&:hover': {
      background: "#DDEEFF",
      cursor: "pointer",
    }
  },
  headings:{
    marginLeft:"16px"
  },
  language:{
    borderBottom: "1px solid #fff",
    margin:"auto 16px auto 0",
    fontFamily:"Montserrat",
    fontSize:"16px",
    [theme.breakpoints.down('xs')]: {
      display: "none"
    },
  },
  topwrap:{
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "90%",
    margin: "0 auto 0px 25px",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "flex-end",
      width: "100%",
      margin: "0 auto",
    },
  },
  lead: {
    fontFamily:"Montserrat",
    fontSize:"32px",
    [theme.breakpoints.down('xs')]: {
      display: "none"
    },
  },
  profiledrop:{
    background: "#043565",
    padding:"0",
    width: "80px",
    outline:"none",
    border:"none",
    '&:hover': {
      background: "#043565",
      padding:"0",
      outline:"none",
      border:"none",
    },
    '&:focus': {
      background: "#15171c",
      padding:"0",
      outline:"none",
      border:"none",
    }
  },
  itemdropdown: {
    background: "#414757",
    padding: "0"
  },
  dropdownitems: {
    marginTop: "8px",
    '&:hover': {
      background: "#632ce4",
      color: "#fff"
    },
 
  },
  subitems:{
    width: "100%",
    padding: "15px",
    paddingLeft: "40px",
    '&:hover': {
      background: "#632ce4",
      cursor: "pointer"
    }
  }
}));
function ResponsiveDrawer(props) {
  console.log(props);

  const classes = useStyles();
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
  <>
  <div style={{height:"12px"}}></div>

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Dashboard
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Employee Management
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>User Management
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Agent Management
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Reports
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Reported Information
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Wanted
</Typography>
</div>
<Divider style={{margin:"8px auto",  width:"86%"}} />

<div className={classes.headingblock}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Pages
</Typography>
</div>
{/* <Divider style={{margin:"10px 0px"}} /> */}

</>
  );

return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.topwrap}>
          <Typography className={classes.lead} variant="h6" noWrap>
            Vigilant
          </Typography>
          <SearchBar style={{height : "32px",  margin:"auto 20px"}}/>
          <div  style={{display: 'flex'}} >

          <Typography className={classes.language} variant="h6" noWrap>
            English <ExpandMoreIcon/>
          </Typography>

          {/* <Dropdown> */}
                    <img style={{height : "38px", borderRadius: "50%", width: "40px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTBIOoSFMx3dCEPOnRAWLFmbJYa_eggwSww&usqp=CAU" />
                   
                  {/* </Dropdown> */}
          </div>
          </div>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon style={{color:"black"}}/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} style={{ padding: '0', margin:'0'}}/>
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
        {props.children}
      </div>
    </div>
  );
  
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default withRouter(ResponsiveDrawer);
