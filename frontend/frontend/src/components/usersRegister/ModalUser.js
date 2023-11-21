import React, { useEffect, useState } from 'react'
import {Modal, ModalBody, ModalHeader,Form, FormGroup,Label,Input,Button,ModalFooter} from 'reactstrap';
import styled from "styled-components";
import { toast } from "react-toastify";
const modeloPersona={
  id:0,
  nombre:"",
  autor:"",
  email:"",
  role:"",
  password:""
}
const ModalPersona = ({mostrarModal,setMostrarModal,guardarPersona,editar,setEditar,editarpersona}) => {

  const [persona,setPersona]=useState(modeloPersona)


  const ObtenerdatosInput = (e) => {
    const { name, value } = e.target;
  
    if (name === "role") {
      setPersona((prevPersona) => ({
        ...prevPersona,
        role: value,
      }));
    } else {
      setPersona((prevPersona) => ({
        ...prevPersona,
        [name]: value,
      }));
    }
  };



  const enviarDatos=async ()=>{
    if (persona.nombre === "" || persona.apellido === "" || persona.email === "" || persona.role === "" || persona.password === "") {
      toast.warn("Complete todos los campos!");
      return;
    }
    if(persona.id===0){
      await guardarPersona(persona)
    }else{
      editarpersona(persona)
    }
    setPersona(modeloPersona)
  }

  useEffect(()=>{
    if(editar!==null){
      setPersona(editar)
    }else{
      setPersona(modeloPersona)
    }
  },[editar])

  const cerrarModal=()=>{
    setMostrarModal(!mostrarModal)
    setEditar(null)
  }



  return (
    <Modal isOpen={mostrarModal}>
        <ModalHeader>
          {persona.id===0 ? 'NUEVA PERSONA' : 'EDITAR PERSONA'}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label  >Nombre</Label>
              <Input name="nombre" onChange={(e)=>ObtenerdatosInput(e)} value={persona.nombre}/>
            </FormGroup>
            <FormGroup>
              <Label>Apellido</Label>
              <Input name="apellido" onChange={(e)=>ObtenerdatosInput(e)} value={persona.apellido}/>
            </FormGroup>
            <FormGroup>
              <Label>Correo</Label>
              <Input type='email' name="email" onChange={(e)=>ObtenerdatosInput(e)} value={persona.email}/>
            </FormGroup>
        
            <FormGroup>
            <Label  >Rol</Label>
          <Input
      id="role"
      name="role"
      type="select"
      onChange={(e)=>ObtenerdatosInput(e)} 
    >
      <option value="administrador">
        Administrador
      </option>
      <option value="jurado">
        Jurado
      </option>
      <option value="estudiante">
        Estudiante
      </option>
   
    </Input>
            </FormGroup>

            <FormGroup>
              <Label>password</Label>
              <Input name="password" onChange={(e)=>ObtenerdatosInput(e)} value={persona.password}/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
        <Button color='primary' size='sm' onClick={enviarDatos}>Guardar</Button>
        <Button color='danger' size='sm' onClick={cerrarModal}>Cerrar</Button>
        </ModalFooter>
    </Modal>
  )
}

export {ModalPersona}





