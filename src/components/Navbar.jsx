import ProximityView from "../images/ProximityView.png";
import GitHub from "../images/GitHub.png";
import logout from "../images/exit.png";

import { firebaseLogout } from "../functionality/Firebase";

export function Nav() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{marginRight:"30px"}} href="#">
                    <img src={ProximityView} style={{width:"230px"}} onClick={firebaseLogout}/>
                </a>
            </div>
        </nav>
    );
}
