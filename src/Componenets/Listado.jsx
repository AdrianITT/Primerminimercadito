import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
            ? <p>No hay frutas</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Cantidad</th>
                <th>company</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.cantidad}</td>
                    <td>{a.company}</td>
                    <td><Button onClick={()=>props.eliminar(a.id)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>props.modificar(a.id)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;