
//Cell.js
//child component
//Xihe Wang
import React, {useState, useContext} from 'react';
import { CellContext } from './CellContext';

const Cell = ({ toggleCell }) => {
    const [isOn, setIsOn] = useState(false);
    const { toggleCounter } = useContext(CellContext);
    
    const handleClick = () => {
        const newState = !isOn;
        setIsOn(newState);
        toggleCell(newState  ? 1 : -1); // increment or decrement
        toggleCounter(newState ? 1 : -1); // context counter
    };
    
    return (
         <div
            onClick={handleClick}
            style={{
                width: '100px',
                height: '100px',
                border: '1px solid grey',
                backgroundColor: isOn ? 'black' : 'white',
                
            }}
        ></div>
    );
    
};

export default Cell;
