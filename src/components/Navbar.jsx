import ProximityView from "../images/ProximityView.png";
import { useState } from "react";
import { firebaseLogout, simulateAlert } from "../functionality/Firebase";

export function Nav() {
    const [refresh, setRefresh] = useState(false);

    if(refresh == true){
        setRefresh(false);
    }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ marginRight: "20px" }} href="#">
                    <img src={ProximityView} style={{ width: "230px" }} onClick={firebaseLogout} />
                </a>

                <button class="navbar-toggler" type="button" style={{ marginRight: "20px" }} data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <button style={{ marginTop: "23px", marginLeft: "10px", fontWeight:"600", color: "transparent", backgroundColor: "transparent", border: "solid 0px transparent" }} onClick={()=>{simulateAlert()}} aria-current="page" href="#">
                                <p style={{ color: "rgb(3, 126, 197)", fontSize: "18px" }}>
                                Simulate Alert 🚨
                                </p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}