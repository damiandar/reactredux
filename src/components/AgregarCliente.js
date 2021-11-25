import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addClienteAction } from '../redux/actions';


const AgregarCliente = () => {
    const clientes=   useSelector(state => state.clientes);
    const dispatch = useDispatch();

    const addCliente=()=>{
        let nuevoCliente={id:clientes.length +1 ,nombre: clienteNombre };
        dispatch(addClienteAction(nuevoCliente))
    }
    const [clienteNombre,setClienteNombre]=useState("")
    return (
        <div>
            <input type="text" value={clienteNombre} onChange={(e)=>setClienteNombre(e.target.value) }/>
            <button onClick={()=> addCliente() }>Agregar Cliente</button>
        </div>
    )
}

export default AgregarCliente
