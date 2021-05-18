import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AgentCard from '../components/Agents/AgentCard'

const useStyles = makeStyles(theme => ({
    all:{
        color:"#0C161D",
    },
    lead:{
        fontFamily:"Montserrat",
        fontWeight:"700"
    }
}));

const Home= () =>{

    const classes = useStyles();

    return (
      <div className="root">
      <Typography className={classes.lead} variant="h6" noWrap>
      Agent Management
      </Typography>
      <div style={{height:"16px"}}></div>
      <Typography className={classes.all} variant="h7" noWrap>
      All(10)
      </Typography>
      <div style={{height:"16px"}}></div>
      
      <div style={{display:"flex",boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.08)", justifyContent:"space-around", background:"white", flexDirection:"column"}}>
      <div style={{display:"flex", width:"98%", margin:"0 auto", height:"40px", fontWeight:"700", alignItems:"center", justifyContent:"space-evenly", paddingTop:"10px"}}>
          <div>Name</div>
          <div className="hide">Reports</div>
          <div className="hide">Login</div>
          <div className="hide">Location</div>
          <div className="hide">Date</div>
          <div className="hide">Registration</div>
          <div>Action</div>
      </div>
<Divider light style={{margin:"8px auto 0px auto", width:"96%"}} />

<AgentCard />
<AgentCard />
<AgentCard />
<AgentCard />

<div style={{display:"flex", margin:"0 auto 10px auto", height:"50px", alignItems:"center", justifyContent:"space-between", width:"93%"}}>

<div>Showing results 1 to 4 of 30 Entries</div>
<div style={{display:"flex", }}>
    <div>Previous</div> 
    <div style={{marginLeft:"18px", background:"#6C63FF" , padding:"0 8px", color:"#fff"}}>1</div> 
    <div style={{marginLeft:"18px"}}>2</div> 
    <div style={{marginLeft:"18px" }}>3</div>
    </div>

</div>

      </div>
      
      
      </div>
    );
  }


export default Home;
