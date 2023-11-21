import React from 'react'
import {BsDoorOpen ,BsGrid1X2Fill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill} from 'react-icons/bs'
import { Link} from 'react-router-dom'


const Sidebar = ({openSideBardToggle,OpenSidebar,cambiarPagina}) => {
  return (
    
    <aside id='sidebar' className={openSideBardToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Feria UAB
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <span onClick={() => cambiarPagina('Home')}>
            <BsFillGrid3X3GapFill className='icon' /> Resultados
          </span>
        </li>
        <li className='sidebar-list-item'>
          <span onClick={() => cambiarPagina('UserPage')} to='/usuarios'>
            <BsPeopleFill className='icon' /> Gestionar Usuarios
          </span>
        </li>
        <li className='sidebar-list-item'>
          <span onClick={() => cambiarPagina('ProjectPage')} to='/proyectos'>
            <BsMenuButtonWideFill className='icon' /> Gestionar Proyectos
          </span>
        </li>
        <li className='sidebar-list-item'>
          <span onClick={() => cambiarPagina('PuntajePage')} to='/calificacion'>
            <BsListCheck className='icon' /> Calificar Proyecto
          </span>
        </li>
     

        <li className='sidebar-list-item'>
          <Link  to='/'>
            <BsDoorOpen className='icon' /> Gestionar Calificaciones
          </Link>
        </li>
        {/* Resto de tus enlaces */}
      </ul>
    </aside>
  )
}

export default Sidebar





// import React from 'react'
// import {BsFillBellFill,BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
// import { Link, useNavigate } from 'react-router-dom'


// const Sidebar = ({openSideBardToggle,OpenSidebar,cambiarPagina}) => {
//   return (
    
//     <aside id='sidebar' className={openSideBardToggle ? 'sidebar-responsive' : ''}>
//       <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//           Feria UAB
//         </div>
//         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//       </div>
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('Home')}>
//             <BsFillGrid3X3GapFill className='icon' /> Resultados
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('UserPage')} to='/usuarios'>
//             <BsPeopleFill className='icon' /> Registrar Usuarios
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('ProjectPage')} to='/proyectos'>
//             <BsMenuButtonWideFill className='icon' /> Registrar Proyectos
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('PuntajePage')} to='/calificacion'>
//             <BsListCheck className='icon' /> Calificar Proyectos
//           </Link>
//         </li>
//         {/* Resto de tus enlaces */}
//       </ul>
//     </aside>
//   )
// }

// export default Sidebar





// import React from 'react'
// import {BsFillBellFill,BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
// import { Link, useNavigate } from 'react-router-dom'


// const Sidebar = ({openSideBardToggle,OpenSidebar,cambiarPagina}) => {
//   return (
    
//     <aside id='sidebar' className={openSideBardToggle ? 'sidebar-responsive' : ''}>
//       <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//           Feria UAB
//         </div>
//         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//       </div>
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('Home')}>
//             <BsFillGrid3X3GapFill className='icon' /> Resultados
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('UserPage')} to='/usuarios'>
//             <BsPeopleFill className='icon' /> Registrar Usuarios
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('ProjectPage')} to='/proyectos'>
//             <BsMenuButtonWideFill className='icon' /> Registrar Proyectos
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link onClick={() => cambiarPagina('PuntajePage')} to='/calificacion'>
//             <BsListCheck className='icon' /> Calificar Proyectos
//           </Link>
//         </li>
//         {/* Resto de tus enlaces */}
//       </ul>
//     </aside>
//   )
// }

// export default Sidebar