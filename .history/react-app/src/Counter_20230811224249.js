import React, { useState } from 'react';
import './counter.css'

const Counter = () => {

    const [currentValue, setCurrentValue ] = useState(0);


const increment = () => {

    const newValue = currentValue + 1;

    if (currentValue !== newValue) {
        setCurrentvalue(newValue)

    }

    return 0
}

const decrease = () => {

    const newValue = currentValue - 1;

    if(currentValue !==newValue) {
        setCurrentvalue(newValue)
    }

    return 0
}

const reset = () => {
    setCurrentvalue(0)
}

    return(
        <div className='counter-main'>
            <div className='counter'>
                <button onClick={increment}>
                    Increase
                </button>
                <h1>{currentValue}</h1>
                <button onClick={decrease}>
                    Decrease
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )

}

export default Counter;
