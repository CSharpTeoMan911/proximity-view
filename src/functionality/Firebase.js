import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, query, orderByValue, remove, push } from "firebase/database";
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


onValue(query(ref(database, '/'), orderByValue()), (snapshot) => {
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


export async function deleteAlert(path, setRefresh){
    const alertRef = ref(database, path);
    try{
        await remove(alertRef);
        setRefresh(true);
    }
    catch{}
}

export async function simulateAlert(setRefresh){
    let currentdate = new Date();

    let year = currentdate.getFullYear();
    let month = currentdate.getMonth() + 1;
    let day = currentdate.getDate();

    let hours = currentdate.getHours() + 1;
    let minutes = currentdate.getMinutes() + 1;
    let seconds = currentdate.getSeconds() + 1;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    const baseDate = `${year}${month}${day}`;
    const alertRef = ref(database, `/Alerts/${baseDate}`);

    try{
        await push(alertRef, {"alert_name": `${baseDate}${hours}${minutes}${seconds}`});
        setRefresh(true);
    }
    catch{}
    
}

