import { useReducer } from "react";
import { ReducerAction } from "../models/shared/reducerAction";
import { keycapsList } from "../models/keycap/keycapsList";
import { Keycap } from "../models/keycap/keycap";
import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";


type KeycapsState = {
    keycaps: Keycap[];
}

export type KeycapsAction = ReducerAction<KeycapsSelectionActionTypes, number[]>;

const initializeState = (): KeycapsState => ({
    keycaps: keycapsList.map(keycap => ({
        size: keycap.size,
        isSelected: false,
        legends: keycap.legends,
    } as Keycap))
})

const defaultState: KeycapsState = initializeState();

const keycapsReducer = (
    state: KeycapsState,
    action: KeycapsAction
): KeycapsState => {
    const { keycaps } = state;
    let selectedKeycaps = keycaps.filter(keycap => keycap.isSelected);

    if (!selectedKeycaps.length) {
        selectedKeycaps = keycaps;
    }

    switch(action.type) {
        case KeycapsSelectionActionTypes.selectKeycaps:
            action.payload.forEach(keycapIndex => keycaps[keycapIndex].isSelected = true);
            break;
        case KeycapsSelectionActionTypes.unselectKeycaps:
            action.payload.forEach(keycapIndex => keycaps[keycapIndex].isSelected = false);
            break;
    }

    return { ...state };
};

export const useKeycapsReducer = () => useReducer(keycapsReducer, defaultState);
