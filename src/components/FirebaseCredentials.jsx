import { useEffect } from "react";
import "../App.css"
import {setCredentialPaneGeometry} from "../animations.js";
import firebaseLogo from "../images/firebaselogo.png";

export function CredentialsTable(){
    useEffect(()=>{
        setCredentialPaneGeometry();
    }, []);

    return (
        <div id="credentials-table" className="credentials-table">
            <img style={{width:"60%", alignSelf:"center", maxWidth:"400px", marginBottom:"20px"}} src={firebaseLogo}/>

            <div style={{display:'flex', flexDirection:"column", width:'100%', alignSelf:"center",  marginBottom:"10px"}}>
                <div style={{width:"60%", alignSelf:"center",}}>
                    <p className="auth-label">Email</p>
                    <input className="auth-input" type="text" placeholder="Enter your email" />
                </div>
            </div>

            <div style={{display:'flex', flexDirection:"column", width:'100%', alignSelf:"center", marginBottom:"10px"}}>
                <div style={{width:"60%", alignSelf:"center",}}>
                    <p className="auth-label">Password</p>
                    <input className="auth-input" type="password" placeholder="Enter your password" />
                </div>
            </div>

            <button className="credentials-button" >
                Login
            </button>
        </div>
    );
}