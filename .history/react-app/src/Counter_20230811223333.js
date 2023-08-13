import React, { useState } from 'react';
import './counter.css'

const Counter = () => {

    const [currentValue, setCurrentvalue ] = useState(0);


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