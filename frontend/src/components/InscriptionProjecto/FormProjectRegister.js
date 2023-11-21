import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const FormInscriptionProject = ({ getProjects, onEdit, setOnEdit }) => {

  const ahora = Date.now();
const fecha = new Date(ahora);
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const horaActual = `${hora < 10 ? "0" : ""}${hora}:${minutos < 10 ? "0" : ""}${minutos} - ${dia}/${mes}/${anio}`;

// console.log(horaActual);
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const project = ref.current;
      project.carrera.value = onEdit.carrera;
      project.asignatura.value = onEdit.asignatura;
      project.tituloproyecto.value = onEdit.tituloproyecto;
      project.participantes.value = onEdit.participantes;
      project.docente.value = onEdit.docente;
      // project.fecha.value = onEdit.fecha;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = ref.current;

    if (
      !project.carrera.value ||
      !project.asignatura.value ||
      !project.tituloproyecto.value ||
      !project.participantes.value ||
      !project.docente.value 

      
    ) {
      return toast.warn("Complete todos los campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          carrera: project.carrera.value,
          asignatura:project.asignatura.value,
          tituloproyecto:project.tituloproyecto.value,
          participantes: project.participantes.value,
          docente: project.docente.value,
          // fecha: project.fecha.value,
          fecha:horaActual,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          carrera: project.carrera.value,
          asignatura:project.asignatura.value,
          tituloproyecto:project.tituloproyecto.value,
          participantes: project.participantes.value,
          docente: project.docente.value,
          // fecha:project.fecha.value,
          fecha:horaActual,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    project.carrera.value = "";
    project.asignatura.value = "";
    project.tituloproyecto.value = "";
    project.participantes.value = "";
    project.docente.value = "";
    // project.fecha.value = "";

    setOnEdit(null);
    getProjects();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Carrera</Label>
        <Input name="carrera" />
      </InputArea>
      <InputArea>
        <Label>Asignatura</Label>
        <Input name="asignatura" />
      </InputArea>
      <InputArea>
        <Label>Titulo proyecto</Label>
        <Input name="tituloproyecto" />
      </InputArea>
      <InputArea>
        <Label>Participantes</Label>
        <Input name="participantes" />
      </InputArea>
      <InputArea>
        <Label>Docentes</Label>
        <Input name="docente" />
      </InputArea>
      {/* <InputArea>
        <Label>Fecha</Label>
        <Input name="fecha" type="date" />
      </InputArea> */}

      <Button type="submit">Crear Projecto</Button>
    </FormContainer>
  );
};

export default FormInscriptionProject;
