import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import Home from './components/home';
import About from './components/About';
import Academics from './components/Academics';
import Department from './components/Department';
import Admission from './components/Admission';
import './App.css';


function Header(){
  return(
    <div>
       <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Academics">Academics</Link></li>
        <li><Link to="/Admission">Admission</Link></li>
        <li><Link to="/Department">Department</Link></li>
       </ul>
    </div>
  )
}
function App(){
  return(
    <div>
      <img src="C:\Scient\test\src\pic.png" height={200} width={1000}></img>
      <hr/>
      <marquee>Welcome To Scient Institute Of Technology</marquee>
      <hr/>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/home" element={<Home/>}>Home</Route>
        <Route path="/Academics" element={<Academics/>}>Academics</Route>
        <Route path="/Admission" element={<Admission/>}>Admission</Route>
        <Route path="/Department" element={<Department/>}>Department</Route>
      </Routes>      
      </BrowserRouter>
      <center><footer>
        <p>@Scient Institute of Technology</p>
        </footer></center>
    </div>
  )
}export default App;