import { Button, Table } from 'reactstrap'

const TablaPuntajes = ({data,setEditar,mostrarModal,setMostrarModal,eliminarPuntaje}) => {
    const enviarDatos=(puntaje)=>{
        setEditar(puntaje)
        setMostrarModal(!mostrarModal)
    }

  return (
    <Table striped responsive>
        <thead>
            <tr>
                <th>Id Proyecto</th>
                <th>Puntaje</th>
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
                            <td>{items.project_id}</td>
                            <td>{items.puntaje}</td>
                         
                            <td>
                                <Button color='primary' size='sm' className='me-2'
                                onClick={()=>enviarDatos(items)}>Editar</Button>
                                <Button color='danger' size='sm' onClick={()=>eliminarPuntaje(items.id)} >Eliminar</Button>
                            </td>

                        </tr>

                    ))
                )
            }

        </tbody>

    </Table>
    
  )
}

export {TablaPuntajes}