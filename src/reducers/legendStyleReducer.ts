import { useReducer } from "react";
import { FlexPositions } from "../models/flexPositions";
import { LegendStyleActions } from "../models/legendStyleActions";
import { LegendStylePropsState } from "../models/legendStyleState";
import { ReducerAction } from "../models/reducerAction";


export const defaultLegendStyleState: LegendStylePropsState = {
    fontFamily: "sans-serif",
    fontSize: 16,
    isUppercase: false,
    alignLegend: FlexPositions.flexStart,
    justifyLegend: FlexPositions.flexStart,
}

type LegendStyleProp = string | boolean | FlexPositions;


const legendStyleReducer = (
    state: LegendStylePropsState,
    action: ReducerAction<LegendStyleActions, LegendStyleProp>
): LegendStylePropsState => {
    switch(action.type) {
        case LegendStyleActions.setFontFamily:
            return { ...state, fontFamily: action.payload as string }
        case LegendStyleActions.setFontSize:
            return { ...state, fontSize: parseInt(action.payload as string) }
        case LegendStyleActions.setIsUppercase:
            return { ...state, isUppercase: action.payload as boolean }
        case LegendStyleActions.setAlignLegend:
            return { ...state, alignLegend: action.payload as FlexPositions }
        case LegendStyleActions.setJustifyLegend:
            return { ...state, justifyLegend: action.payload as FlexPositions }
    }
};

export const useLegendStyleReducer = () => useReducer(legendStyleReducer, defaultLegendStyleState);
