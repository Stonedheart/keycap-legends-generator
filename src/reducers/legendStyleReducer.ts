import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyles } from "../models/legendStyle/legendStyleState";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";
import { LegendStylePayload } from "../models/legendStyle/legendStylePayload";
import alphanumericLegends from "../components/keycaps/alphanumericLegends";
import { DEFAULT_FONT_SIZE } from "../models/shared/defaultFontSize";


const defaultLegendStyleState: LegendStyles = {
    fontFamily: "sans-serif",
    fontSize: DEFAULT_FONT_SIZE,
    textTransform: "lowercase",
    alignItems: FlexPositions.flexStart,
    justifyContent: FlexPositions.flexStart,
    color: "#000000", //black
}

export type KeycapsLegendsStyleState = LegendStyles[][];

const initializeState = () => alphanumericLegends.map(keycapLegends => keycapLegends.map(() => defaultLegendStyleState));

const keycapsState: KeycapsLegendsStyleState = initializeState();

const legendStyleReducer = (
    state: KeycapsLegendsStyleState,
    action: ReducerAction<LegendStyleActionTypes, LegendStylePayload>
): KeycapsLegendsStyleState => {
    const { keycapsIndexes, legendsIndexes, valueToUpdate } = action.payload;
    const keycapsToUpdateIndexes = keycapsIndexes.length ? keycapsIndexes : Array.from(alphanumericLegends.keys());

    keycapsToUpdateIndexes.forEach((keycapIndex) => {
        const current = state[keycapIndex];
        const legendsIndexesToUpdate = legendsIndexes.length ? legendsIndexes : Object.keys(current).map(parseInt);
        legendsIndexesToUpdate.forEach(legendIndex => {
            current[legendIndex] = {
                ...current[legendIndex],
                [action.type]: valueToUpdate
            }
        });
    });

    return state;
};


export const useLegendStyleReducer = () => useReducer(legendStyleReducer, keycapsState);
