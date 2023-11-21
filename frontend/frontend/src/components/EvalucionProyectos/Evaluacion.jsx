import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import './Evalucion.css'
const modeloPuntaje={
  id:0,
  project_id:0,
  puntaje:"",
}


const Evaluacion = () => {
  const [proyectos,setProyectos]=useState([])

  const [puntaje,setPuntaje]=useState(modeloPuntaje)

  const mostrarProyectos= async()=>{
    const response = await fetch('http://localhost:8800/')
    if (response.ok){
    const data=await response.json();
    setProyectos(data)
    return data;

    }else{
      return console.log('Error en la lista')
      }

      
    }
  useEffect(()=>{
    mostrarProyectos();
  },[])


  const ObtenerdatosInput = (e) => {
    const { name, value } = e.target;
    console.log(value)
  
    if (name === "project_id") {
      setPuntaje((prevPuntaje) => ({
        ...prevPuntaje,
        project_id: value,
      }));
    } else {
      setPuntaje((prevPuntaje) => ({
        ...prevPuntaje,
        [name]: value,
      }));
    }
  };

  return (
    <div className="evaluation-container">
           <h2>Formulario de Evaluación</h2>
    <Form id="evaluation-form">
           <FormGroup>
    <Label>Nombre de Proyecto</Label>
 
  <Input
    id="proyecto"
    name="proyecto"
    type="select"
    onChange={(e) => ObtenerdatosInput(e)}
  >
    {proyectos.map((proyecto) => (
      <option key={proyecto.id} value={proyecto.tituloproyecto}>
        {proyecto.tituloproyecto}
      </option>
    ))}
  </Input>
</FormGroup>
    
         <div className="row">
           <div className="cell">Pregunta</div>
           <div className="cell">Deficiente (2)</div>
           <div className="cell">Insuficiente (4)</div>
           <div className="cell">Puede mejorar (6)</div>
           <div className="cell">Satisfactorio (8)</div>
           <div className="cell">Excelente (10)</div>
       </div>

    <FormGroup className="row">
     <Label className="cell" for="p1">Presentación del tema</Label>
      <div className="cell"><Input className='input'  type="radio" name="p1" value="2" onChange={(e)=>ObtenerdatosInput(e)} /></div>

      <div className="cell"><Input className='input' type="radio" name="p1" value="4" onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p1" value="6" onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p1" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input' type="radio" name="p1" value="10" onChange={(e)=>ObtenerdatosInput(e)} /></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p1">Contribución al Conocimiento</Label>
      <div className="cell"><Input className='input'  type="radio" name="p2" value="2" onChange={(e)=>ObtenerdatosInput(e)} /></div>
      <div className="cell"><Input className='input' type="radio" name="p2" value="4" onChange={(e)=>ObtenerdatosInput(e)} /></div>
      <div className="cell"><Input className='input' type="radio" name="p2" value="6" onChange={(e)=>ObtenerdatosInput(e)} /></div>
      <div className="cell"><Input className='input' type="radio" name="p2" value="8" onChange={(e)=>ObtenerdatosInput(e)}/> </div>
      <div className="cell"><Input className='input' type="radio" name="p2" value="10" onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p3">Impacto en la sociedad</Label>
      <div className="cell"><Input className='input' type="radio" name="p3" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p3" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p3" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p3" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input' type="radio" name="p3" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p4">Innovación de propuesta</Label>
      <div className="cell"><Input className='input' type="radio" name="p4" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p4" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p4" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p4" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input' type="radio" name="p4" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p5">Dominio del tema</Label>
      <div className="cell"><Input className='input'  type="radio" name="p5" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p5" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p5" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p5" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input'  type="radio" name="p5" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p6">Apoyos didácticos - materiales</Label>
      <div className="cell"><Input className='input'  type="radio" name="p6" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p6" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p6" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p6" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input'  type="radio" name="p6" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p7">Respuesta a preguntas</Label>
      <div className="cell"><Input className='input'  type="radio" name="p7" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p7" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p7" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input'  type="radio" name="p7" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input'  type="radio" name="p7" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p8">Organización de la información</Label>
      <div className="cell"><Input className='input' type="radio" name="p8" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p8" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p8" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p8" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input' type="radio" name="p8" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup className="row">
      <Label className="cell" for="p9">Participación de todos los miembros del grupo</Label>
      <div className="cell"><Input className='input' type="radio" name="p9" value="2"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p9" value="4"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p9" value="6"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
      <div className="cell"><Input className='input' type="radio" name="p9" value="8" onChange={(e)=>ObtenerdatosInput(e)} /> </div>
      <div className="cell"><Input className='input' type="radio" name="p9" value="10"  onChange={(e)=>ObtenerdatosInput(e)}/></div>
    </FormGroup>

    <FormGroup>
      <Button className='button' type="submit">Evaluar</Button>
    </FormGroup>
  </Form>
  </div>

  )
}

export default Evaluacion


