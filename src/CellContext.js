//CellContext.js
//implementing context
//Xihe Wang

import React, { createContext, useState } from 'react';

export const CellContext = createContext();

export const CellProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const toggleCounter = (value) => {
        setCounter((prevCounter) => prevCounter + value);
    };

    return (
        <CellContext.Provider value={{ counter, toggleCounter }}>
            {children}
        </CellContext.Provider>
    );
};