import downArrow from "../images/down-arrow.png";
import upArrow from "../images/up-arrow.png";
import trash from "../images/trash.png";
import { useState } from "react";

export function Alert(props) {
    const { alerts } = props;
    const { date } = props;

    const [expanded, setExpanded] = useState(false);

    const strDate = `${date.substr(4, 2)}\\${date.substr(2, 2)}\\${date.substr(0, 4)}`;

    return <div style={{ padding:"10px", height:"fit-content", alignSelf: "center", display: "flex", justifyContent:"center", flexDirection: "column", borderRadius: "10px", boxShadow: "0px 0px 20px rgb(0, 39, 75)", width: "92%", marginTop: "15px", backgroundColor: "rgba(0, 86, 143, 0.6)" }}>
        <div style={{ alignSelf: "center", display: "flex", width: "100%" }}>
            <div style={{display:"flex", flexDirection:"row", alignContent:"center", alignItems:"center"}}>
                <button style={{border:"0px solid transparent", backgroundColor:"transparent", padding:"0px"}} onClick={() => {setExpanded(!expanded); }}>
                    <img style={{height:"25px"}} src={expanded == true ? downArrow : upArrow}/>
                </button>

                <p style={{padding:"0px", margin:"0px 10px 0px 30px", fontWeight:"700", fontSize:"16px", color:"rgb(12, 158, 255)"}}>{strDate}</p>
            </div>
            <div style={{marginLeft:"auto"}}>
                <button style={{border:"0px solid transparent", backgroundColor:"transparent", padding:"0px"}}>
                    <img style={{height:"30px"}} src={trash}/>
                </button>
            </div>
        </div>
        <div>

        </div>
    </div>
}