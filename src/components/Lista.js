import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {deleteClienteAction} from "../redux/actions";


const Lista = () => {
    const clientes= useSelector(state => state.clientes);
    const dispatch=useDispatch();

    return (
        <div>
            { clientes.map((cliente,index)=>{
                return(
                    <div key={index}>
                        <p>{cliente.id} {cliente.nombre}</p>
                        <p>
                        <button onClick={()=> dispatch(deleteClienteAction(cliente.id)) } >
                            Eliminar
                        </button>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}

export default Lista
