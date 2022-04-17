import React from 'react';
import {CalculatorForm} from "./CalculatorForm";
import {CalculatorResult} from "./CalculatorResult";
import {CalculatorHistory} from "./CalculatorHistory";
import {CalculatorButtons} from "./CalculatorButtons";
import {Provider} from "react-redux";
import {store} from "./store";

export const CalculatorApp = () => {
    return (
        <>
            <Provider store={store}>
                <CalculatorForm/>
                <CalculatorResult/>
                <CalculatorButtons/>
                <CalculatorHistory/>
            </Provider>
        </>
    );
}