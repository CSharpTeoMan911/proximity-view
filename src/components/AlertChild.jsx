import alertImg from "../images/alert.png";
import bin from "../images/bin.png";
import { deleteAlert } from "../functionality/Firebase";
import { useState } from "react";

export default function AlertChild(props) {
    const { alert } = props;
    const { path } = props;

    const [refresh, setRefresh] = useState(false);
    
    if(refresh == true){
        setRefresh(false);
    }

    return <div style={{ display:"flex", alignSelf:"center", flexDirection:"row", alignItems:"center", padding: "10px 10px 10px 10px", boxShadow: "0px 0px 20px rgb(0, 23, 44)", width: "98%", marginTop: "15px", borderRadius:"5px", backgroundColor: "rgba(0, 51, 85, 0.6)" }}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <img src={alertImg} style={{height:"20px"}}/>
            <p style={{padding:"0px", margin:"0px 10px 0px 30px", fontWeight:"700", fontSize:"16px", color:"rgb(12, 158, 255)"}}>
                {`${alert.alert_name.substr(6, 2)}\\${alert.alert_name.substr(4, 2)}\\${alert.alert_name.substr(0, 4)}  ${alert.alert_name.substr(8, 2)}:${alert.alert_name.substr(10, 2)}:${alert.alert_name.substr(12, 2)}`}
            </p>
        </div>
        <div style={{marginLeft:"auto"}}>
            <button style={{border:"0px solid transparent", backgroundColor:"transparent", padding:"0px"}}>
                <img style={{height:"30px"}} src={bin} onClick={()=>{deleteAlert(path, setRefresh)}}/>
            </button>
        </div>
    </div>
}