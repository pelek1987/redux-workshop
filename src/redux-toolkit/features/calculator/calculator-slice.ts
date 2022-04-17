import {createSlice} from "@reduxjs/toolkit";

interface CalculatorState {
    first: number,
    second: number;
    result: string | number;
    history: string[];
}

const initialState: CalculatorState = {
    first: 0,
    second: 0,
    result: '',
    history: []
}

interface SetFirst {
    payload: number;
}

interface SetSecond {
    payload: number;
}

interface SetResult {
    payload: number | string;
}

interface AddToHistory {
    payload: string
}

interface ClearHistory {
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setFirst: (state, action: SetFirst) => {
            state.first = action.payload
        },
        setSecond: (state, action: SetSecond) => {
            state.second = action.payload
        },
        setResult: (state, action: SetResult) => {
            state.result = action.payload
        },
        addToHistory: (state, action: AddToHistory) => {
            state.history.push(action.payload);
        },
        clearHistory: (state, action: ClearHistory) => {
            state.history = []
        }
    }
})

export const {setFirst, setSecond, setResult, addToHistory, clearHistory} = calculatorSlice.actions;