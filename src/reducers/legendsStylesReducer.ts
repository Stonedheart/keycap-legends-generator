import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyle } from "../models/legendStyle/legendStyle";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";
import { LegendStylePayload } from "../models/legendStyle/legendStylePayload";
import { DEFAULT_FONT_SIZE } from "../models/shared/defaultFontSize";
import alphanumericLegends from "../components/keycaps/alphanumericLegends";


const defaultLegendStyleState: LegendStyle = {
    fontFamily: "sans-serif",
    fontSize: DEFAULT_FONT_SIZE,
    textTransform: "lowercase",
    alignItems: FlexPositions.flexStart,
    justifyContent: FlexPositions.flexStart,
    color: "#000000", //black
}

export type LegendsStylesState = LegendStyle[][];

const initializeState = () => alphanumericLegends.map(legends => legends.map(() => defaultLegendStyleState));

const defaultState: LegendsStylesState = initializeState();

const legendsStylesReducer = (
    state: LegendsStylesState,
    action: ReducerAction<LegendStyleActionTypes, LegendStylePayload>
): LegendsStylesState => {
    const { keycapsIndexes, legendsIndexes, valueToUpdate } = action.payload;
    const keycapsIndexesToUpdate = keycapsIndexes.length ? keycapsIndexes : Array.from(alphanumericLegends.keys());

    keycapsIndexesToUpdate.forEach((keycapIndex) => {
        const current = state[keycapIndex];
        const legendsIndexesToUpdate = legendsIndexes.length ? legendsIndexes : Array.from(current.keys());
        legendsIndexesToUpdate.forEach(legendIndex => {
            current[legendIndex] = {
                ...current[legendIndex],
                [action.type]: valueToUpdate
            }
        });
    });

    return { ...state };
};


export const useLegendsStylesReducer = () => useReducer(legendsStylesReducer, defaultState);
