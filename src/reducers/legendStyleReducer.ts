import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import LegendStylePropsState from "../models/legendStyle/legendStyleState";
import { ReducerAction } from "../models/shared/reducerAction";
import LegendStyleActions from "../models/legendStyle/LegendStyleActions";
import LegendStyleProp from "../models/legendStyle/legendStyleProp";
import TextTransformType from "../models/legendStyle/tyextTransformType";


const defaultLegendStyleState: LegendStylePropsState = {
    fontFamily: "sans-serif",
    fontSize: 16,
    textTransform: "lowercase",
    alignLegend: FlexPositions.flexStart,
    justifyLegend: FlexPositions.flexStart,
    fontColor: "#000000", //black
    selectedKeycaps: []
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
        case LegendStyleActions.setTextTransform:
            return { ...state, textTransform: action.payload as TextTransformType }
        case LegendStyleActions.setAlignLegend:
            return { ...state, alignLegend: action.payload as FlexPositions }
        case LegendStyleActions.setJustifyLegend:
            return { ...state, justifyLegend: action.payload as FlexPositions }
        case LegendStyleActions.setFontColor:
            return { ...state, fontColor: action.payload as string }
        case LegendStyleActions.setSelectedKeycaps:
            return { ...state,selectedKeycaps: action.payload as number[] }
    }
};

export const useLegendStyleReducer = () => useReducer(legendStyleReducer, defaultLegendStyleState);
