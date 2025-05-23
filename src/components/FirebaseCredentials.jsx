import { useEffect } from "react";
import "../App.css"
import { setCredentialPaneGeometry, setCredentialPaneOpacityFluctuation } from "../animations.js";
import firebaseLogo from "../images/firebaselogo.png";
import { firebaseAuth } from "../functionality/Firebase.js";

export function CredentialsTable() {
    useEffect(() => {
        setCredentialPaneGeometry();
        setCredentialPaneOpacityFluctuation();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor:"transparent", overflow: "auto" }} className="scrollable">
            <div id="credentials-table" className="credentials-table">
                <img style={{ width: "60%", alignSelf: "center", maxWidth: "400px", marginBottom: "20px" }} src={firebaseLogo} />

                <div style={{ display: 'flex', flexDirection: "column", width: '100%', alignSelf: "center", marginBottom: "10px" }}>
                    <div style={{ width: "60%", alignSelf: "center", }}>
                        <p className="auth-label">Email</p>
                        <input id="email_input" className="auth-input" type="text" placeholder="Enter your email" />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: "column", width: '100%', alignSelf: "center", marginBottom: "10px" }}>
                    <div style={{ width: "60%", alignSelf: "center", }}>
                        <p className="auth-label">Password</p>
                        <input id="password_input" className="auth-input" type="password" placeholder="Enter your password" />
                    </div>
                </div>

                <button className="credentials-button" onClick={_firebaseAuth}>
                    Login
                </button>
            </div>
        </div>
    );
}

async function _firebaseAuth() {
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    const log_in_result = await firebaseAuth(email, password);


}


