import { Container ,Row,Col, Card, CardHeader, CardBody, Button} from 'reactstrap'

import {TablaDeCalificaciones} from './TablaDeCalificaciones'
import React, { useState,useEffect } from 'react'
import { ModalPuntaje } from './ModalEvaluacion'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './PuntajePage.css'
import '../EstilosTablas.css'

const PuntajePage = () => {
  const [puntajes,setPuntajes]=useState([])
  const [mostrarModal,setMostrarModal] = useState(false)
  const [editar,setEditar]=useState(null)

  

  const mostrarPuntajes= async()=>{
    const response = await fetch('http://localhost:8900/carrera')
    if (response.ok){
    const data=await response.json();
    setPuntajes(data)
    }else{
      console.log('Error en la lista')
      }
    }
  useEffect(()=>{
    mostrarPuntajes();
  },[])
  

  const guardarPuntaje= async (puntaje)=>{
    const response=await fetch('http://localhost:8900',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(puntaje)
    })
    if(response.ok){
      toast.success("Formulario enviado!");
      setMostrarModal(!mostrarModal);
      mostrarPuntajes()
      

    }
  }

  const editarpuntaje= async (puntaje) => {
    const response = await fetch(`http://localhost:8900/${puntaje.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'},
        body:JSON.stringify(puntaje)
        
    })

    if(response.ok){
      toast.success("Se ha editado correctamente");

      setMostrarModal(!mostrarModal);
      mostrarPuntajes()
    }
  }

  const eliminarPuntaje = async(id)=>{
    var respuesta=window.confirm("Desea eliminar el Puntaje?")
    if(!respuesta){
      return;
    }
    const response = await fetch(`http://localhost:8900/${id}`,{
      method:'DELETE',
    })
    if (response.ok){
      toast.success("Eliminado correctamente")
      mostrarPuntajes()
    }
  }

  return (
    <Container fluid className="puntaje-page-container">
      <Row className='mt-5'>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de Puntajes de Proyectos</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color='success'
              onClick={()=>setMostrarModal(!mostrarModal)}>Calificar</Button>
              <hr/>
            
            <hr/>

              <TablaDeCalificaciones 
              data={puntajes}
              setEditar={setEditar}
              mostrarModal={mostrarModal}
              setMostrarModal={setMostrarModal}
              eliminarPuntaje={eliminarPuntaje}
              />
                    

            </CardBody>
          </Card>
        </Col>


      </Row>
      <ModalPuntaje
      mostrarModal={mostrarModal}
      setMostrarModal={setMostrarModal}
      guardarPuntaje={guardarPuntaje}
      editar={editar}
      setEditar={setEditar}
      editarpuntaje={editarpuntaje}/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> 
     
    </Container>
    
  )
}

export default PuntajePage