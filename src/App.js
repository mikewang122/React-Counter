// src/App.js
// parent component
import React, { useState } from 'react';
import Cell from './Cell';
import { CellProvider } from './CellContext';

function App() {
    const [counter, setCounter] = useState(0);

    const toggleCell = (value) => {
        setCounter(counter + value);
    };

    return (
        <CellProvider>
        <div className="App">
        <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'screenHeight',
                }}>
            <h1>Count: {counter}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '0px' }}>
                <Cell toggleCell={toggleCell} />
                <Cell toggleCell={toggleCell} />
                <Cell toggleCell={toggleCell} />
                <Cell toggleCell={toggleCell} />
            </div>
            </div>
        </div>
        </CellProvider>
    );
}

export default App;
