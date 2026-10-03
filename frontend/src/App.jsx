import Laptop from "./Components/Laptop"
import Navbar from "./Pages/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Mobile from "./Components/Mobile"
import Mouse from "./Components/Mouse"
import AC from "./Components/Ac"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Footer from "./Pages/Footer"
import ViewDetails from "./Pages/ViewDetails"
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/laptop" element={<Laptop/> }/>
     <Route path="/mobile" element={<Mobile/> }/>
     <Route path="/mouse" element={<Mouse/>}/>
     <Route path="/ac" element={<AC/>}/>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/Register" element={<Register/>}></Route>
     <Route path="/ViweDetails:/id" element={<ViewDetails/>}/>
    </Routes>
    {/* <Laptop/> */}

    </>
  )
}

export default App
