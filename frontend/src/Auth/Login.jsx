import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

import './Login.css'


const Login = () => {
    const [values,setValues]=useState({
        email:'',
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
        if(errors.email===""  && errors.password===""){
          axios.post("http://localhost:8700/login", values)
          .then(res => {
                 if(res.data ==="Success"){
                navigate('/dashboard')
                }else{
                alert("No record existed")
        }
          })
          .catch(error => console.log(error));
        }
      }
 



  return (
    
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            name="email"
            onChange={handleInput}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
            onChange={handleInput}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button className="btn btn-success btn-block">Login</button>
        <p className="mt-2">
          ¿No tienes una cuenta?{' '}
          <Link to="/registrarse" className="btn btn-light btn-block border">
            Crear Cuenta
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Login