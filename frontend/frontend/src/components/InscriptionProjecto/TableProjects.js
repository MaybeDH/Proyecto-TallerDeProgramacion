import { Button, Table } from 'reactstrap'

const TablaProyectos = ({data,setEditar,mostrarModal,setMostrarModal,eliminarProyecto}) => {
    const enviarDatos=(proyecto)=>{
        setEditar(proyecto)
        setMostrarModal(!mostrarModal)
    }

  return (
    <Table striped responsive>
        <thead>
            <tr>
                <th>Carrera</th>
                <th>Asignatura</th>
                <th>Título Proyecto</th>
                <th>Participantes</th>
                <th>Docente</th>
                <th>Fecha</th>
                <th></th>

                
            </tr>
        </thead>
        <tbody>
            {
                (data.length < 1) ? (
                <tr>
                    <td colSpan='6'>Sin registros</td>

                </tr>
                ):(
                    data.map(items=>(
                        <tr key={items.id}>
                            <td>{items.carrera}</td>
                            <td>{items.asignatura}</td>
                            <td>{items.tituloproyecto}</td>
                            <td>{items.participantes}</td>
                            <td>{items.docente}</td>
                            <td>{items.fecha}</td>
                            <td>
                                <Button color='primary' size='sm' className='me-2'
                                onClick={()=>enviarDatos(items)}>Editar</Button>
                            </td>
                            <td>
             
                                <Button color='danger' size='sm' onClick={()=>eliminarProyecto(items.id)} >Eliminar</Button>
                            </td>

                        </tr>

                    ))
                )
            }

        </tbody>

    </Table>
    
  )
}

export {TablaProyectos}