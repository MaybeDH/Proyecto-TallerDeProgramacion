import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';
import './Evalucion.css'

const modeloPuntaje = {
  id: 0,
  project_id: 0,
  puntajes: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0,
    p9: 0,
  },
};

const ModalPuntaje = ({ mostrarModal, setMostrarModal, guardarPuntaje, editar, setEditar, editarpuntaje }) => {
  const [proyectos, setProyectos] = useState([]);
  const [idProyecto, setIdProyecto] = useState(0);
  const [puntajes, setPuntajes] = useState(modeloPuntaje.puntajes);

  const [puntaje, setPuntaje] = useState(modeloPuntaje);

  const mostrarProyectos = async () => {
    const response = await fetch('http://localhost:8800/');
    if (response.ok) {
      const data = await response.json();
      setProyectos(data);
      return data;
    } else {
      return console.log('Error en la lista');
    }
  };

  useEffect(() => {
    mostrarProyectos();
  }, []);

  const ObtenerdatosInput = (e) => {
    const value = e.target.value;
    const idProyecto = parseInt(value, 10);
    setIdProyecto(idProyecto);
  };

  const enviarDatos = async () => {
    const puntajeFinal =
      parseInt(puntajes.p1, 10) +
      parseInt(puntajes.p2, 10) +
      parseInt(puntajes.p3, 10) +
      parseInt(puntajes.p4, 10) +
      parseInt(puntajes.p5, 10) +
      parseInt(puntajes.p6, 10) +
      parseInt(puntajes.p7, 10) +
      parseInt(puntajes.p8, 10) +
      parseInt(puntajes.p9, 10);

    const nuevoPuntaje = {
      ...puntaje,
      project_id: idProyecto,
      puntaje: puntajeFinal,
      puntajes: { ...puntajes },
    };

    setPuntaje(nuevoPuntaje);

    if (
      puntaje.project_id === 0 ||
      Object.values(puntajes).some((p) => parseInt(p, 10) === 0)
    ) {
      toast.warn('Complete todos los campos!');
      return;
    }

    if (puntaje.id === 0) {
      await guardarPuntaje(puntaje);
    } else {
      editarpuntaje(puntaje);
    }

    setPuntaje(modeloPuntaje);
  };

  useEffect(() => {
    if (editar !== null) {
      setPuntaje(editar);
      setPuntajes(editar.puntajes);
    } else {
      setPuntaje(modeloPuntaje);
      setPuntajes(modeloPuntaje.puntajes);
    }
  }, [editar]);

  const cerrarModal = () => {
    setMostrarModal(!mostrarModal);
    setEditar(null);
  };


  return (
    <Modal isOpen={mostrarModal}>
        <ModalHeader>
          {puntaje.id===0 ? 'Calificar' : 'Editar Calificacíon'}
        </ModalHeader>
        <ModalBody>
        <Form id="evaluation-form">
           <FormGroup>
    <Label>Nombre de Proyecto</Label>
 
  <Input
    id="proyecto"
    name="proyecto"
    type="select"
    onChange={ObtenerdatosInput}
  >
    {proyectos.map((proyecto) => (
      <option key={proyecto.id} value={proyecto.id}>
        {proyecto.tituloproyecto}
      </option>
    ))}
  </Input>
</FormGroup>
    
         <div className="row title-modal">
           <div className="cell">Deficiente (2)</div>
           <div className="cell">Insuficiente (4)</div>
           <div className="cell">Puede mejorar (6)</div>
           <div className="cell">Satisfactorio (8)</div>
           <div className="cell">Excelente (10)</div>
       </div>
      <br/>

       <FormGroup className="row">
    <Label className="cell" for="p1">
      Presentación del tema
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p1"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p1: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p2">
      Contribución al Conocimiento
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p2"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p2: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p3">
    Impacto en la sociedad
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p3"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p3: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
        
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p4">
    Innovación de propuesta
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p4"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p4: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p5">
    Dominio del tema
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p5"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p5: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p6">
    Apoyos didácticos - materiales
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p6"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p6: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p7">
    Respuesta a preguntas
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p7"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p7: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p8">
    Organización de la información
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p8"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p8: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>

  <FormGroup className="row">
    <Label className="cell" for="p9">
    Participación de todos los miembros del grupo
    </Label>
    {[2, 4, 6, 8, 10].map((value) => (
      <div key={value} className="cell">
        <Input
          className="input"
          type="radio"
          name="p9"
          value={value}
          onChange={(e) => setPuntajes({ ...puntajes, p9: e.target.value })}
        />
        <Label className="radio-label">{value}</Label>
      </div>
    ))}
  </FormGroup>
   


  </Form>
        </ModalBody>
        <ModalFooter>
        <Button color='primary' size='sm' onClick={enviarDatos}>Calificar</Button>
        <Button color='danger' size='sm' onClick={cerrarModal}>Cerrar</Button>
        </ModalFooter>
    </Modal>
  )
}

export {ModalPuntaje }





