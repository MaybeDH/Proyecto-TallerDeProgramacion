import React, { useEffect, useState } from 'react'
import {Modal, ModalBody, ModalHeader,Form, FormGroup,Label,Input,Button,ModalFooter} from 'reactstrap';
import styled from "styled-components";
import { toast } from "react-toastify";

const ahora = Date.now();
const fecha = new Date(ahora);
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const horaActual = `${hora < 10 ? "0" : ""}${hora}:${minutos < 10 ? "0" : ""}${minutos} - ${dia}/${mes}/${anio}`;
const modeloProyecto={
  id:0,
  carrera:"",
  asignatura:"",
  tituloproyecto:"",
  participantes:"",
  docente:"",
  fecha:horaActual
}
const ModalProyecto = ({mostrarModal,setMostrarModal,guardarProyecto,editar,setEditar,editarproyecto}) => {


  const [proyecto,setProyecto]=useState(modeloProyecto)

  const ObtenerdatosInput = (e) => {
    const { name, value } = e.target;
  
    if (name === "carrera") {
        setProyecto((prevProyecto) => ({
        ...prevProyecto,
        carrera: value,
      }));
    } else {
        setProyecto((prevProyecto) => ({
        ...prevProyecto,
        [name]: value,
      }));
    }
  };



  const enviarDatos=async ()=>{
    if (proyecto.carrera === "" || proyecto.asignatura === "" || proyecto.tituloproyecto === "" || 
    proyecto.participantes === "" || proyecto.docente === "" ) {

      toast.warn("Complete todos los campos!");
      return;
    }
    if(proyecto.id===0){
      await guardarProyecto(proyecto)
    }else{
      editarproyecto(proyecto)
    }
    setProyecto(modeloProyecto)
  }

  useEffect(()=>{
    if(editar!==null){
        setProyecto(editar)
    }else{
        setProyecto(modeloProyecto)
    }
  },[editar])

  const cerrarModal=()=>{
    setMostrarModal(!mostrarModal)
    setEditar(null)
  }



  return (
    <Modal isOpen={mostrarModal}>
        <ModalHeader>
          {proyecto.id===0 ? 'NUEVA PROYECTO' : 'EDITAR PROYECTO'}
        </ModalHeader>
        <ModalBody>
          <Form>

          <FormGroup>
          <Label  >Carrera</Label>
          <Input
      id="carrera"
      name="carrera"
      type="select"
      onChange={(e)=>ObtenerdatosInput(e)} 
    >
      <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                <option value="Ingeniería en Redes y Telecomunicaciones">Ingeniería en Redes y Telecomunicaciones</option>
                <option value="Ingeniería Comercial">Ingeniería Comercial</option>
                <option value="Contaduria Públicas">Contaduria Públicas</option>
    </Input>
            </FormGroup>

            <FormGroup>
              <Label  >Asignatura</Label>
              <Input name="asignatura" onChange={(e)=>ObtenerdatosInput(e)} value={proyecto.asignatura}/>
            </FormGroup>
            <FormGroup>
              <Label>Título Proyecto</Label>
              <Input name="tituloproyecto" onChange={(e)=>ObtenerdatosInput(e)} value={proyecto.tituloproyecto}/>
            </FormGroup>
            <FormGroup>
              <Label>Participantes</Label>
              <Input name='participantes'  onChange={(e)=>ObtenerdatosInput(e)} value={proyecto.participantes}/>
            </FormGroup>
        
            <FormGroup>
              <Label>Docente</Label>
              <Input name="docente" onChange={(e)=>ObtenerdatosInput(e)} value={proyecto.docente}/>
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

export {ModalProyecto}





