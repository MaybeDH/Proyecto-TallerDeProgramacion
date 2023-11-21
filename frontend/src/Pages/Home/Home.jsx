import React, { useEffect, useState } from 'react'
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const modeloData ={
  name: '',
  puntaje:0
}

const Home = () => {
  const [proyectos, setProyectos] = useState([modeloData]);

  useEffect(() => {
    const obtenerProyectos = async () => {
      const response = await fetch('http://localhost:8900/carrera');
      
      if (response.ok) {
        console.log(`Esta es la respuesta de la api ${response}`)
        const data = await response.json();
        // Mapear los datos de la API al formato del modelo
        const proyectosMapeados = data.map(proyecto => ({
          name: proyecto.tituloproyecto,
          puntaje: proyecto.puntaje,
        }) );
        setProyectos(proyectosMapeados);
      }
    };

    obtenerProyectos();
  }, []);
  // const data= JSON.stringify(proyectos, null, 2)
  // console.log(data)




  
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Feria Tecnológica</h3>
      </div>

      <div className='main-cards'>

        <div className='card-primer'>
        <div className='card-inner'>
          <h3>Carreras</h3>
          <BsFillArchiveFill className='card_icon'/>
        </div>
        <h1>4</h1>
        </div>

        <div className='card'>
        <div className='card-inner'>
          <h3>Materias</h3>
          <BsFillGrid3X3GapFill className='card_icon'/>
        </div>
        <h1>28</h1>
        </div>

        <div className='card'>
        <div className='card-inner'>
          <h3>Estudiantes</h3>
          <BsPeopleFill className='card_icon'/>
        </div>
        <h1>154</h1>
        </div>

        <div className='card'>
        <div className='card-inner'>
          <h3>Projectos</h3>
          <BsFillBellFill className='card_icon'/>
        </div>
        <h1>{proyectos.length}</h1>
        </div>
        

      </div>
      <div className='charts'>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          width={800}
          height={400}
          data={proyectos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
           dataKey="name" 
          //  scale="point"
            padding={{ left: 20, right: 20 }} 
            interval={0} // Controla el número de intervalos entre etiquetas
            angle={-75} // Ángulo de rotación del texto
            textAnchor="end" // Alineación del texto al final
            height={250} // Aumenta el espacio vertical para asegurar que los nombres se vean completamente
            />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="puntaje" fill="#0e63ff" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>



 


      </div>
    </main>
  )
}

export default Home