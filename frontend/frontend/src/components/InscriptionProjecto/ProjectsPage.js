import { Container ,Row,Col, Card, CardHeader, CardBody, Button} from 'reactstrap'
import { TablaProyectos } from './TableProjects'
import React, { useState,useEffect } from 'react'
import { ModalProyecto } from './ModalProject'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../EstilosTablas.css'
const ProjectPage = () => {
  const [proyectos,setProyectos]=useState([])
  const [mostrarModal,setMostrarModal] = useState(false)
  const [editar,setEditar]=useState(null)

  const mostrarProyectos= async()=>{
    const response = await fetch('http://localhost:8800/')
    if (response.ok){
    const data=await response.json();
    setProyectos(data)
    }else{
      console.log('Error en la lista')
      }
    }
  useEffect(()=>{
    mostrarProyectos();
  },[])

  const guardarProyecto= async (proyecto)=>{
    const response=await fetch('http://localhost:8800',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(proyecto)
    })
    if(response.ok){
      toast.success("Se ha creado un nuevo proyecto!");
      setMostrarModal(!mostrarModal);
      mostrarProyectos()
      

    }
  }

  const editarproyecto= async (proyecto) => {
    const response = await fetch(`http://localhost:8800/${proyecto.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'},
        body:JSON.stringify(proyecto)
        
    })

    if(response.ok){
      toast.success("Se ha editado el proyecto!");

      setMostrarModal(!mostrarModal);
      mostrarProyectos()
    }
  }

  const eliminarProyecto = async(id)=>{
    var respuesta=window.confirm("Desea eliminar el Proyecto?")
    if(!respuesta){
      return;
    }
    const response = await fetch(`http://localhost:8800/${id}`,{
      method:'DELETE',
    })
    if (response.ok){
      toast.success("Eliminado correctamente")
      mostrarProyectos()
      

    }
  }

  return (
    <Container className='contenedor'>
      <Row className='mt-5'>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de Proyectos</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color='success'
              onClick={()=>setMostrarModal(!mostrarModal)}>Nuevo Proyecto</Button>
              <hr/>
              <TablaProyectos 
              data={proyectos}
              setEditar={setEditar}
              mostrarModal={mostrarModal}
              setMostrarModal={setMostrarModal}
              eliminarProyecto={eliminarProyecto}
              />

            </CardBody>
          </Card>
        </Col>


      </Row>
      <ModalProyecto
      mostrarModal={mostrarModal}
      setMostrarModal={setMostrarModal}
      guardarProyecto={guardarProyecto}
      editar={editar}
      setEditar={setEditar}
      editarproyecto={editarproyecto}/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> 
     
    </Container>
    
  )
}

export default ProjectPage