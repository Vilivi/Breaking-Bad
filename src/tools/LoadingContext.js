import React from 'react'
// import * as t from ".."
const Context = React.createContext({})

// Création d'un hook personnalisé pour récupérer directement le contexte
export function useMyContext () {
    return React.useContext(Context);
}

const CHANGE_LOADING_STATUS = "CHANGE_LOADING_STATUS";

const initialState = {
    load : false
}

// const init = (value) => {
//     return { load: value };
// }

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            return { load: !state.load };
        case 'reset':
            return initialState;
        default:
            throw new Error("L'action " + action.type + " est introuvable.");
    }
}

const LoadingContext = ({ children }) => {
    const [load, dispatch] = React.useReducer(reducer, initialState);

    // On indique au contexte provider qu'il récupère le reducer:
    return (
        <Context.Provider value={[load, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default LoadingContext;


