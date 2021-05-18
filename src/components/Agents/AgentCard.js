import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles(theme => ({
    all:{
        color:"#0C161D",
    }
}));

const AgentCard= () =>{

    const classes = useStyles();

    return (
      <div className="root">
            <div style={{display:"flex", height:"50px", justifyContent:"space-around", paddingTop:"10px"}}>
          <div style={{display:"flex", alignItems:"center", color: "#6C63FF"}}> 
              <img style={{borderRadius:"50%", marginRight:"10px", height: "30px", width:"30px"}} src="https://thumbs.dreamstime.com/z/face-portrait-very-happy-man-against-aqua-marine-blue-face-portrait-very-happy-man-against-aqua-marine-blue-color-background-204349508.jpg" />
              Esther Howard</div>
          <div className="hide" style={{display:"flex", alignItems:"center"}}> 12</div>
          <div className="hide" style={{display:"flex", alignItems:"center", color: "#047D59"}}> Create</div>
          <div className="hide" style={{display:"flex", alignItems:"center"}}> Indore</div>
          <div className="hide" style={{display:"flex", alignItems:"center"}}> May 01, 2021</div>
          <div className="hide" style={{display:"flex", alignItems:"center"}}> <p style={{background:"#D3FCF0", margin:"0", padding:"2px 4px", borderRadius:"4px", color:"#158866"}} >Approve</p></div>
          <div style={{display:"flex"}}> 
          <div style={{display:"flex", alignItems:"center", marginRight:"8px"}}><p style={{background:"#D3FCF0", margin:"0", padding:"2px 4px", borderRadius:"4px", color:"#158866"}} >Enable</p></div>
          <div style={{display:"flex", alignItems:"center", marginRight:"8px"}}><p style={{background:"#D3FCF0", margin:"0", padding:"2px 4px", borderRadius:"4px", color:"#158866"}} >Disable</p></div>
          <div style={{display:"flex", alignItems:"center"}}><p style={{background:"#F5374B", margin:"0", padding:"2px 4px", fontWeight:"100", borderRadius:"4px", color:"#fff"}} ><Delete /></p></div>
        </div>
      </div>
        <Divider light style={{margin:"8px auto", width:"96%"}} />
      
      </div>
    );
  }


export default AgentCard;
