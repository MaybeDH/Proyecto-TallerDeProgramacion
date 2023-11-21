import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegistrarseValidation'
import axios from 'axios'
import './Register.css'



const Registrase = () => {
  const [values,setValues]=useState({
    nombre:'',
    apellido:'',
    email:'',
    role:'Estudiante',
    password:''
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
    <div className="register-container">
    <div className="register-box">
      <h2>Registrarse</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="nombre"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            onChange={handleInput}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            placeholder="Ingrese su apellido"
            name="apellido"
            className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
            onChange={handleInput}
          />
          {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            onChange={handleInput}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={handleInput}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-success btn-block">
          Registrarse
        </button>
        <p className="mt-2">
          ¿Ya tienes una cuenta? <Link to="/" className="btn btn-light btn-block border">Iniciar Sesión</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Registrase