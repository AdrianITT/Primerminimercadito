import React,{Component,useState,useEffect} from 'react'
import './App.css'
import {firebase} from './configurationDataBase/DateFaribase'
import Formulario from './Componenets/Formulario'
import { onValue } from 'firebase/database';
import { ref, set, update } from 'firebase/database';
import Listado from './Componenets/Listado';
import Swal from 'sweetalert2';

function App() {
  const [fruts, setproducto] = useState({
    id:"",
    name:"",
    cantidad:"",
    company:""
  })

  const [lista,setLista]= useState([]);

  const [desactivado,setDesactivado]= useState(false)

  useEffect(()=>{
    let frutList=[];
    const dbRef=ref(firebase,'fruts');
    onValue(dbRef,(snapshot)=>{
      snapshot.forEach((row)=>{
        frutList.push({
          id:row.key,
          name:row.val().name,
          cantidad:row.val().cantidad,
          company:row.val().company
        })

      })
      setLista(frutList)
      },{onlyOnce:true})
    })
  
    const enviar = (e) => {
      e.preventDefault();
  
      const { id, name, cantidad, company } = fruts;
  
      //const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 
      const vacios = (id.length === 0 || name.length === 0 || cantidad.length === 0 || company.length === 0)
  
      if (!vacios) {
        update(ref(firebase, 'fruts/' + id), fruts)
          .then(() => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'fruta agregada',
              showConfirmButton: false,
              timer: 1500
            })
          })
          let temporal = lista;

      if (desactivado === true) {
        temporal = temporal.filter(a => a.id !== id)
      }

      setLista([...temporal, fruts]);
      setproducto({
          id: "",
          name: "",
          cantidad: "",
          company: ""
        });
      setDesactivado(false)

    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
  
        }

        const eliminar = (id)=>{
          set(sef(firebase,'fruts/'+id),null)
          .then(()=>{
            Swal.fire({
            position:'center',
            icon: 'error',
            title: 'Eliminado',
            showConfirmButton: false,
            timer: 1500
            })
          })
          .catch((error)=>{});
          const temporal = lista.filter(a => a.matricula !== id)

            setLista(temporal)
        }

      const guardarCambios = (e) => {

        setproducto({
          ...fruts,
            [e.target.name]: e.target.value
        })
      }

      const modificar = (id) => {
        const temporal = lista.find(a => a.id === id);
         setproducto({
            id: temporal.id,
            name: temporal.name,
            cantidad: temporal.cantidad,
            company: temporal.company
          });
    
          setDesactivado(true)
      }

      
      


  return (
    <>
    <div className='App'>
      <div className='Containers'>
      <Formulario
    enviar={enviar}
    guardarCambios={guardarCambios}
    fruts={fruts}
    desactivado={desactivado}
    />
    <Listado
    lista={lista}
    eliminar={eliminar}
    modificar={modificar}
    />
      </div>
    </div>
    </>
  )
}

export default App;
