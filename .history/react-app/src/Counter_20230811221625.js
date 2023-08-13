import React, { usState } from 'react';
import './counter.css'

const Counter = () => {
    const [currentValue, setCurrentValue ] = useSate(0);


const increment = () => {

    const newValue = currentValue + 1;

    if(currentValue !==newValue) {
        setCurrentValue(newValue)
        }

    return 0
    }

    const decrease = () => {

        const newValue = currentValue - 1;
    
        if(currentValue !==newValue) {
            setCurrentValue(newValue)
        }
    
        return 0
    }
    
        const reset = () => {
            setCurrentValue(0)
    }

    const reset = () => {
        setCurrentValue(0)
    }

        return = () => {
            <div className='counter-main'>
                <div className='counter'>
                    <button onclick={increase}>
                        Increase
                    </button>
                    <h1>{currentValue}</h1>
                    <button onClick={decrease}>
                        Decrease
                    </button>
                    <button onclick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        }

export default Counter;
    