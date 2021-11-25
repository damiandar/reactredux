export const addClienteAction =(cliente)=>(
    {
        type: "ADD_CLIENTE",
        payload: cliente,
    }
);

export const deleteClienteAction =clienteId =>(
    {
        type: "DELETE_CLIENTE",
        payload: clienteId
    }
);