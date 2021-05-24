import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStylePropsState } from "../models/legendStyle/legendStyleState";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStyleActions } from "../models/legendStyle/legendStyleActions";
import { LegendStyleProp } from "../models/legendStyle/legendStyleProp";


const defaultLegendStyleState: LegendStylePropsState = {
    fontFamily: "sans-serif",
    fontSize: 16,
    isUppercase: false,
    alignLegend: FlexPositions.flexStart,
    justifyLegend: FlexPositions.flexStart,
    fontColor: "#000000", //black
}

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
        case LegendStyleActions.setFontColor:
            return { ...state, fontColor: action.payload as string }
    }
};

export const useLegendStyleReducer = () => useReducer(legendStyleReducer, defaultLegendStyleState);
