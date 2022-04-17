import {CalculatorAction} from "../action-types/calculator";

interface CalculatorState {
    first: number,
    second: number;
    result: string | number;
    history: string[];
}

interface SetFirst {
    type: CalculatorAction.SET_FIRST;
    payload: number;
}

interface SetSecond {
    type: CalculatorAction.SET_SECOND;
    payload: number;
}

interface SetResult {
    type: CalculatorAction.SET_RESULT;
    payload: number | string
}

interface AddToHistory {
    type: CalculatorAction.ADD_TO_HISTORY;
    payload: string;
}

interface ClearHistory {
    type: CalculatorAction.CLEAR_HISTORY;
}

type Action = SetFirst | SetSecond | SetResult | AddToHistory | ClearHistory;

const initialState: CalculatorState = {
    first: 0,
    second: 0,
    result: '',
    history: []
}

const calculatorReducer = (state = initialState, action: Action) => {

    switch(action.type) {
        case CalculatorAction.SET_FIRST: {
            return {
                ...state,
                first: action.payload
            }
        }
        case CalculatorAction.SET_SECOND: {
            return {
                ...state,
                second: action.payload
            }
        }
        case CalculatorAction.SET_RESULT: {
            return {
                ...state,
                result: action.payload
            }
        }
        case CalculatorAction.ADD_TO_HISTORY: {
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        }
        case CalculatorAction.CLEAR_HISTORY: {
            return {
                ...state,
                history: []
            }
        }
        default: {
            return state;
        }
    }
}

export default calculatorReducer;