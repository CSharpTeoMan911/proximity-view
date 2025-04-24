import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { CredentialsTable } from "./components/FirebaseCredentials.jsx";
import { MainPanel } from "./components/MainPanel.jsx";
import { Nav } from "./components/Navbar.jsx";


function App() {
  const [auth, setAuth] = useState(false);

  //document.cookies = "SameSite=Strict;";

  useEffect(() => {
    let _auth = localStorage.getItem("authenticated");

    console.log(_auth);

    if (_auth !== null && _auth !== undefined) {
      setAuth(_auth);
    }
    else {
      setAuth(false);
    }
  }, [])


  return (
    <div id="main_div" className="background">
      <div className="background-mask">
        {auth ? (
          <MainPanel>
            <Nav/>
          </MainPanel>
        ) : (
          <CredentialsTable />
        )}
      </div>
    </div>
  );
}


export default App;

