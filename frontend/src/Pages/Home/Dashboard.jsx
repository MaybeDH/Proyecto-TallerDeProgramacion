// import React, { useState } from 'react'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'
// import './Dashboard.css'

// const Dashboard = () => {
//   const [openSideBardToggle,setOpenSideBardToggle]=useState(false)

//   const OpenSidebar=()=>{
//     setOpenSideBardToggle(!openSideBardToggle)
//   }
//   return (
//     <div className='grid-container'>
//         <Header OpenSidebar={OpenSidebar}/>
//         <Sidebar openSideBardToggle={openSideBardToggle} OpenSidebar={OpenSidebar}/>
//         <Home/>
//         </div>
//   )
// }

// export default Dashboard




import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import UserPage from '../../components/usersRegister/UserPage'
import ProjectPage from '../../components/InscriptionProjecto/ProjectsPage'
import PuntajePage from '../../components/EvalucionProyectos/EvaluacionPage'
import './Dashboard.css'
import { TablaPuntajes } from '../../components/EvalucionProyectos/TableEvaluacion'


const Dashboard = () => {
  const [openSideBardToggle,setOpenSideBardToggle]=useState(false)
  const [currentPage, setCurrentPage] = useState('Home');

  const OpenSidebar=()=>{
    setOpenSideBardToggle(!openSideBardToggle)
  }
  const cambiarPagina = (nuevaPagina) => {
    setCurrentPage(nuevaPagina);
  };


  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSideBardToggle={openSideBardToggle} OpenSidebar={OpenSidebar} cambiarPagina={cambiarPagina}/>
          {/* Renderizar el componente según la página actual */}
      {currentPage === 'Home' && <Home />}
      {currentPage === 'UserPage' && <UserPage />}
      {currentPage === 'ProjectPage' && <ProjectPage />}
      {currentPage === 'PuntajePage' && <PuntajePage />}
      {currentPage === 'EditarPuntuacion' && <TablaPuntajes />}
        </div>
  )
}

export default Dashboard