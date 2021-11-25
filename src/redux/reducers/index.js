const reducer = (state , action) => {
    switch (action.type) {
        case 'ADD_CLIENTE':
            return {
                ...state,
                clientes: [...state.clientes, action.payload]
            };
        case 'DELETE_CLIENTE':
            return {
                ...state,
                clientes: state.clientes.filter((cliente)=>cliente.id !== action.payload )
            }
        default:
            return state;
    }
};

export default reducer;
