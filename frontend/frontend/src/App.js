import Registrase from "./Auth/Registrarse.jsx";
// import RegisterUsers from "./Pages/RegisterUsers.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Auth/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Home/Dashboard.jsx";
import UserPage from './components/usersRegister/UserPage';
import ProjectPage from './components/InscriptionProjecto/ProjectsPage';
import PuntajePage from './components/EvalucionProyectos/EvaluacionPage';
import './App.css'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>

        <Route path="/usuarios" element={<UserPage/> }></Route>
        <Route path="/proyectos" element={<ProjectPage/>}></Route>
        <Route path="/calificacion" element={<PuntajePage/>}></Route>

        <Route path="/registrarse" element={<Registrase/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
  {/* <Login/> */}
    {/* <RegisterUsers/> */}