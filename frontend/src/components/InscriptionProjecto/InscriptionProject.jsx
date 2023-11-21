import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegistrarseValidation'
import axios from 'axios'
import { toast } from "react-toastify";
import styled from "styled-components";





const InscriptionProject = () => {
 

  const [carrera, setCarrera] = useState('');
  const [values,setValues]=useState({
    carrera:'',
    asignatura:'',
    tituloproyecto:'',
    participantes:'',
    docente:'',
    fecha:''
  })
  const navigate=useNavigate();

  const [errors,setErrors]=useState({});
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}));
  }


  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.nombre === "" && errors.apellido === "" &&  errors.email==="" && errors.password===""){
      axios.post("http://localhost:8700",values)
      .then(res => {
        navigate('/dashboard')
      })
      .catch(error => console.log(error));
    }
  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Registrarse</h2>

        <form action="" onSubmit={handleSubmit} >

        <div className='mb-3'>
    <label htmlFor="carrera"><strong>Carrera</strong> </label>
    <br />
       <select id="carrera" name="carrera" required onChange={(event) =>{ setCarrera(event.target.value)}}>
         <option disabled selected>Seleccionar Carrera</option>
              <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                <option value="Ingeniería en Redes y Telecomunicaciones">Ingeniería en Redes y Telecomunicaciones</option>
                <option value="Ingeniería Comercial">Ingeniería Comercial</option>
                <option value="Contaduria Públicas">Contaduria Públicas</option>
       </select>
     {errors.role && <span className='text-danger'>{errors.role}</span>}
    </div>

        <div className='mb-3'>
            <label htmlFor="asignatura"><strong>Asignatura</strong> </label>
            <input type="text" placeholder='Ingrese asignatura' name='asignatura'
             className='form-control rounded-0' onChange={handleInput}/>
             {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor="tituloproyecto"><strong>Título Projecto</strong> </label>
            <input type="text" placeholder='Ingrese título del proyecto ' name='tituloproyecto'
             className='form-control rounded-0' onChange={handleInput}/>
             {errors.apellido && <span className='text-danger'>{errors.apellido}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor="participantes"><strong>Participantes</strong> </label>
            <input type="email" placeholder='Ingrese nombres Participantes' name='participantes'
            className='form-control rounded-0' onChange={handleInput}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor="docente"><strong> Docente guía </strong> </label>
            <input type="password" placeholder='Ingrese nombre Docente' name='docente'
             className='form-control rounded-0' onChange={handleInput}/>
             {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

     
          <button type='submit' className='btn btn-success'>Registrarse</button>
          <p>Crear cuenta</p>
          <Link to="/" className='btn btn-default border w-100 bg-light'>Login</Link>

        </form>
      </div>
        
        
    </div>

  )
}

export default InscriptionProject