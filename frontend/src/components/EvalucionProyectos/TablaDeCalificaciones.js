import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Label, Input } from 'reactstrap';

const TablaDeCalificaciones = ({ data }) => {
  const [carreras, setCarreras] = useState([]);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState('');
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);

  // Obtener la lista de carreras al cargar el componente
  useEffect(() => {
    const obtenerCarreras = async () => {
      const response = await fetch('http://localhost:8900/carrera');
      if (response.ok) {
        const data = await response.json();
        setCarreras(data);
      }
    };

    obtenerCarreras();
  }, []);

  // Filtrar proyectos según la carrera seleccionada
  useEffect(() => {
    // Validar si hay una carrera seleccionada
    if (carreraSeleccionada) {
      const proyectosFiltrados = data.filter((proyecto) => proyecto.carrera === carreraSeleccionada);
      setProyectosFiltrados(proyectosFiltrados);
    } else {
      // Si no hay carrera seleccionada, limpiar proyectosFiltrados
      setProyectosFiltrados([]);
    }
  }, [carreraSeleccionada, data]);

  const handleCarreraChange = (e) => {
    // Limpiar proyectosFiltrados al cambiar la selección de carrera
    setProyectosFiltrados([]);
    setCarreraSeleccionada(e.target.value);
  };


  return (
    <div>
      <>
        <Label>Carrera</Label>
        <Input
          id="carrera"
          name="carrera"
          type="select"
          onChange={handleCarreraChange}
          value={carreraSeleccionada}
        >
          <option value="">Seleccionar Carrera</option>
          <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
          <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
          <option value="Ingeniería en Redes y Telecomunicaciones">Ingeniería en Redes y Telecomunicaciones</option>
          <option value="Ingeniería Comercial">Ingeniería Comercial</option>
          <option value="Contaduria Públicas">Contaduria Públicas</option>
      
        </Input>
      </>
      <Table striped responsive >
        <thead>
          <tr>
            <th>Puntaje</th>
            <th>Carrera</th>
            <th>Asignatura</th>
            <th>Titulo proyecto</th>
            <th>Participantes</th>
            <th>Docente</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {proyectosFiltrados.length < 1 ? (
            <tr>
              <td colSpan="8">Sin registros</td>
            </tr>
          ) : (
            proyectosFiltrados.map((items) => (
              <tr key={items.id}>
                <td>{items.puntaje}</td>
                <td>{items.carrera}</td>
                <td>{items.asignatura}</td>
                <td>{items.tituloproyecto}</td>
                <td>{items.participantes}</td>
                <td>{items.docente}</td>
                <td>{items.fecha}</td>
                 {/* Asumiendo que hay un campo ponderacion */}
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export { TablaDeCalificaciones };
