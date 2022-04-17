import React from 'react';
import {CalculatorArithmeticsButtons} from "./CalculatorArithmeticsButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {clearHistory} from "./features/calculator/calculator-slice";

export const CalculatorButtons = () => {
    const {history} = useSelector((store: RootState) => store.calculator);
    const dispatch = useDispatch();
    const handleClearHistory = () => {
        dispatch(clearHistory())
    }

    return (
        <>
            <CalculatorArithmeticsButtons/>
            <button onClick={handleClearHistory}>Clear history ({history.length})</button>
        </>
    );
}