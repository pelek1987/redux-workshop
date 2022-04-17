import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./store";

export const CalculatorResult = () => {
    const { first, second, result } = useSelector((store: RootState) => store.calculator);
    return (
        <>
            <h1>Result: {result}</h1>
            <p>Current values: {first} and {second}</p>
        </>
    );
}