import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";

export const setKeycapsIndexes = (keycapsIndexes: number[]) => ({
    type: KeycapsSelectionActionTypes.setKeycapsIndexes,
    payload: keycapsIndexes
});

export const setLegendsIndexes = (legendsIndexes: number[]) => ({
    type: KeycapsSelectionActionTypes.setLegendsIndexes,
    payload: legendsIndexes
});
