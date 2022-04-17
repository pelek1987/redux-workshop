import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store"
import {setFirst, setSecond} from "./features/calculator/calculator-slice";

export const CalculatorForm = () => {
    const {first, second} = useSelector((store: RootState) => store.calculator);
    const dispatch = useDispatch();
    const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirst(Number(e.target.value)));
    }
    const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecond(Number(e.target.value)));
    }
    return (
        <>
            <input value={first} type="number" onChange={handleFirstChange}/>
            <input value={second} type="number" onChange={handleSecondChange}/>
        </>
    );
}