import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect }  from 'react';
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
    background: "#1f3dff",
    display: "flex",
    justifyContent:"center",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
    
    [theme.breakpoints.down('xs')]: {
      ...theme.mixins.toolbar,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1f3dff",
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
    background: "#1f3dff",
    color: "#fff",
    marginBottom:"10px",
    height: "48px",
    display: "flex",
    fontWeight:"700",
    alignItems:"center",
    fontSize:"16px",
    alignItems:"center",
    '&:hover': {
      background: "#2266ff",
      cursor: "pointer",
    }
  },
  headingblock_ac: {
    background: "#2266ff",
    marginBottom:"10px",
    color: "#fff",
    // borderLeft: "8px solid #fff",
    height: "48px",
    display: "flex",
    fontWeight:"700",
    alignItems:"center",
    fontSize:"16px",
    // justifyContent:"center",
    alignItems:"center",
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
  const [current, setCurrent] = useState("home")

  const currentHandle=(place)=>{
    console.log(place)
    setCurrent(place);
  }
  

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

  <Link style={{textDecoration:"none"}} to='/'>
{current==="home"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("home")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Home
</Typography>
</div>
:
<div className={classes.headingblock} onClick={(place)=>currentHandle("home")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Home
</Typography>
</div>
}

</Link>

<Link style={{textDecoration:"none"}} to='/test'>

{current==="bots"?
<div className={classes.headingblock_ac}  onClick={(place)=>currentHandle("bots")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Bots
</Typography>
</div> :
<div className={classes.headingblock}  onClick={(place)=>currentHandle("bots")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Bots
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/test'>

{current==="tools"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("tools")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Predictive Tools
</Typography>
</div>
:
<div className={classes.headingblock} onClick={(place)=>currentHandle("tools")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Predictive Tools
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/test'>
{current==="recommendation"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("recommendation")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Recommendations
</Typography>
</div> :
<div className={classes.headingblock} onClick={(place)=>currentHandle("recommendation")}>
<Typography variant="h7" className={classes.headings} >
     <i className="fa fa-building"></i>Recommendations
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/test'>
{current==="integrations"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("integrations")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Integrations
</Typography>
</div> :
<div className={classes.headingblock} onClick={(place)=>currentHandle("integrations")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Integrations
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/test'>
{current==="settings"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("settings")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Settings
</Typography>
</div>:
<div className={classes.headingblock} onClick={(place)=>currentHandle("settings")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Settings
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/test'>
{current==="more"?
<div className={classes.headingblock_ac} onClick={(place)=>currentHandle("more")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>More Tools
</Typography>
</div>:
<div className={classes.headingblock} onClick={(place)=>currentHandle("more")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>More Tools
</Typography>
</div>
}
</Link>

<Link style={{textDecoration:"none"}} to='/viewprojects'>
<div className={classes.headingblock} onClick={(place)=>currentHandle("more")}>
<Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Logout Now
</Typography>
</div>
</Link>
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
          <div  style={{display: 'flex'}} >

          <h3>Sttabot</h3>

          
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
              <CloseIcon style={{color:"white"}}/>
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
            <div style={{ height:"20px"}}/>
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
