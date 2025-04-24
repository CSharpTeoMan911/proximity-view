import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { CredentialsTable } from "./components/FirebaseCredentials.jsx";


function App() {
  const [auth, setAuth] = useState(false);

  //document.cookies = "SameSite=Strict;";

  useEffect(()=>{
    let cookie = document.cookies;
    setAuth(cookie !== null || cookie !== undefined);
    console.log(auth);
  },[])

  return (
    <div id="main_div" className="background">
      <div className="background-mask"> 
        {!auth ? (
          <div className="credentials-table">
            <h1>Welcome back!</h1>
          </div>
        ) : (
          <CredentialsTable />
        )}
      </div>
    </div>
  );
}


export default App;

