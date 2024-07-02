import "./App.css"
import Login from "./Components/Login/Login.jsx"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import studentCard from "./Components/studentCard/studentCard.jsx"

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
