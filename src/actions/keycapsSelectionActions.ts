import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";

export const selectKeycaps = (keycapsIndexes: number[]) => ({
    type: KeycapsSelectionActionTypes.selectKeycaps,
    payload: keycapsIndexes
});

export const unselectKeycaps = (keycapsIndexes: number[]) => ({
    type: KeycapsSelectionActionTypes.unselectKeycaps,
    payload: keycapsIndexes
});
