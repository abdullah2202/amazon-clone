//setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);

