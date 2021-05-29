import { useReducer } from "react";
import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";
import { KeycapsSelectionState } from "../models/keycapsSelection/keycapsSelectionState";
import { ReducerAction } from "../models/shared/reducerAction";


const defaultState: KeycapsSelectionState = {
    keycapsIndexes: [],
    legendsIndexes: [],
}

const keycapsSelectionReducer = (
    state: KeycapsSelectionState,
    action: ReducerAction<KeycapsSelectionActionTypes, number[]>
): KeycapsSelectionState => {
    return {
        ...state,
        [action.type]: action.payload
    };
};


export const useKeycapsSelectionReducer = () => useReducer(keycapsSelectionReducer, defaultState);
