
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./components/Home.jsx";
import styles from "./components/dashboard.css";
import { useState } from "react";
import Post from "./components/Post.jsx";

function App() {
  const [Inputs,setInputs] = useState('');
  const [myColor, setmyColor] = useState('');
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home myColor={myColor} setmyColor={setmyColor} Inputs={Inputs} setInputs={setInputs}/>}/>
          <Route path="/post" element={<Post myColor={myColor} setmyColor={setmyColor} Inputs = {Inputs} setInputs = {setInputs} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;

