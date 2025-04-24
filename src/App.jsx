import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { CredentialsTable } from "./components/FirebaseCredentials.jsx";


function App() {
  const [auth, setAuth] = useState(false);

  useEffect(()=>{
    setAuth(localStorage.getItem("auth") !== null);
  },[])

  return (
    <div id="main_div" className="background">
      <div className="background-mask">
        <CredentialsTable />
      </div>
    </div>
  );
}


export default App;

