import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {addToHistory, setResult} from "./actions/calculator";

enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

export const CalculatorArithmeticsButtons = () => {
    const {first, second} = useSelector((store: RootState) => store.calculator);
    const dispatch = useDispatch();
    const handleSetOperationResult = (result: number | string) => {
        dispatch(setResult(result));
    }
    const handleAddToHistory = (line: string) => {
        dispatch(addToHistory(line));
    }
    const handleOperation = (operation: Operation) => {
        let operationResult: number | string;
        switch (operation) {
            case Operation.ADD: {
                operationResult = first + second;
                handleSetOperationResult(operationResult);
                handleAddToHistory(`Added ${first} to ${second} and got ${operationResult}`);
                break;
            }
            case Operation.SUBTRACT: {
                operationResult = first - second;
                handleSetOperationResult(operationResult);
                handleAddToHistory(`Subtracted ${second} from ${first} and got ${operationResult}`);
                break;
            }
            case Operation.MULTIPLY: {
                operationResult = first * second;
                handleSetOperationResult(operationResult);
                handleAddToHistory(`Multiplied ${first} by ${second} and got ${operationResult}`);
                break;
            }
            case Operation.DIVIDE: {
                if (second === 0) {
                    handleSetOperationResult("Nie można dzielić przez 0");
                    handleAddToHistory(`Tried to divide ${first} by 0 but dividing by 0 is prohibited`);
                } else {
                    operationResult = first / second;
                    handleSetOperationResult(operationResult);
                    handleAddToHistory(`Divided ${first} by ${second} and got ${operationResult}`);
                }
                break;
            }
        }
    }

    return (
        <>
            <button onClick={() => handleOperation(Operation.ADD)}>+</button>
            <button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
            <button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
            <button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>
        </>
    );
}