import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from '../firebase_config.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
let setAlerts = null;

export const extractedAlerts = {"firebase": null};

export async function firebaseAuth(email, password){
    const successful = 'Login successful!';
    const unsucessful = 'Email or password is incorrect!';
    
    try
    {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user !== null || userCredential.user !== undefined ? successful : unsucessful;
    }
    catch
    {
        return unsucessful;
    }
}


onAuthStateChanged(auth, (user) => {
    let isAuthenticated = localStorage.getItem("authenticated");

    if (user) {
        if(isAuthenticated === null){
            localStorage.setItem("authenticated", true);
            window.location.reload();
        }
    }
    else{
        if(isAuthenticated !== null){
            localStorage.removeItem("authenticated");
            window.location.reload();
        }
    }
});


onValue(ref(database, '/'), (snapshot) => {
    const data = snapshot.val();
    if(setAlerts !== null && setAlerts !== undefined){
        setAlerts(data);
    }
});


export function initUpdateReader(_setAlerts){
    setAlerts = _setAlerts;
}


export async function firebaseLogout(){
    try
    {
        await signOut(auth);
        window.location.reload();
    }
    catch{}
}

