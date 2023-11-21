import { Container ,Row,Col, Card, CardHeader, CardBody, Button} from 'reactstrap'
import { TablaPersonas } from './TableUsers'
import React, { useState,useEffect } from 'react'
import { ModalPersona } from './ModalUser'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../EstilosTablas.css'
// import { toast, ToastContainer } from "react-toastify/dist/toastify.esm.js";
// import { toast, ToastContainer } from 'react-toastify/dist/inject-style.esm.mjs'

const UserPage = () => {
  const [personas,setPersonas]=useState([])
  const [mostrarModal,setMostrarModal] = useState(false)
  const [editar,setEditar]=useState(null)

  const mostrarPersonas= async()=>{
    const response = await fetch('http://localhost:8700/')
    if (response.ok){
    const data=await response.json();
    setPersonas(data)
    }else{
      console.log('Error en la lista')
      }
    }
  useEffect(()=>{
    mostrarPersonas();
  },[])

  const guardarPersona= async (persona)=>{
    const response=await fetch('http://localhost:8700',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(persona)
    })
    if(response.ok){
      toast.success("Se ha creado un nuevo usuario!");
      setMostrarModal(!mostrarModal);
      mostrarPersonas()
      

    }
  }

  const editarpersona= async (persona) => {
    const response = await fetch(`http://localhost:8700/${persona.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'},
        body:JSON.stringify(persona)
        
    })

    if(response.ok){
      toast.success("Se ha editado el usuario !");

      setMostrarModal(!mostrarModal);
      mostrarPersonas()
    }
  }

  const eliminarPersona = async(id)=>{
    var respuesta=window.confirm("Desea eliminar la persona?")
    if(!respuesta){
      return;
    }
    const response = await fetch(`http://localhost:8700/${id}`,{
      method:'DELETE',
    })
    if (response.ok){
      toast.success("Eliminado correctamente")
       mostrarPersonas()
      

    }
  }

  return (
    <Container className='contenedor' >
      <Row className='mt-5'>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Usuarios</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color='success'
              onClick={()=>setMostrarModal(!mostrarModal)}>Nueva Persona</Button>
              <hr/>
              <TablaPersonas 
              data={personas}
              setEditar={setEditar}
              mostrarModal={mostrarModal}
              setMostrarModal={setMostrarModal}
              eliminarPersona={eliminarPersona}
              />

            </CardBody>
          </Card>
        </Col>


      </Row>
      <ModalPersona
      mostrarModal={mostrarModal}
      setMostrarModal={setMostrarModal}
      guardarPersona={guardarPersona}

      editar={editar}
      setEditar={setEditar}
      editarpersona={editarpersona}/>


<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      
     
    </Container>
    
  )
}

export default UserPage