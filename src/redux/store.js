import {createStore} from "redux";
import reducer from "./reducers";

const initialState={
    clientes: [
        {
            id:1,
            nombre:"Laura Alonso"
        },
        {
            id:2,
            nombre:"Marina Lopez"
        }
    ]
};

export const store= createStore(
    reducer,
    initialState
);
