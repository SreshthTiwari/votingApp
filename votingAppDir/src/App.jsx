import "./App.css"
import Login from "./Components/Login/Login.jsx"
import { initializeApp } from "firebase/app";
import { getAuth, useAuthState } from "firebase/auth"
import studentCard from "./Components/studentCard/studentCard.jsx"

const firebaseConfig = {
  apiKey: "AIzaSyDpVqoOIpnrVU5j3n2R5tWhVI_Rr6QnMW4",
  authDomain: "votingapp-be942.firebaseapp.com",
  projectId: "votingapp-be942",
  storageBucket: "votingapp-be942.appspot.com",
  messagingSenderId: "885556007289",
  appId: "1:885556007289:web:277b264917f224ab0ddfa8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

function App() {
  return (
    <>

    </>
  )
}

export default App
