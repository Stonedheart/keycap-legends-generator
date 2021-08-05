import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStylingActionTypes } from "../models/legendStyling/legendStylingActionTypes";
import { TextTransformType } from "../models/legendStyling/textTransformType";
import { KeycapsAction } from "../reducers/keycapsReducer";


export const setFontFamily = (fontFamily: string): KeycapsAction => ({
    type: LegendStylingActionTypes.setFontFamily,
    payload: { propName: "fontFamily", value: fontFamily }
});
export const setFontSize = (fontSize: number): KeycapsAction => ({
    type: LegendStylingActionTypes.setFontSize,
    payload: { propName: "fontSize", value: fontSize }
});
export const setFontColor = (color: string,): KeycapsAction => ({
    type: LegendStylingActionTypes.setFontColor,
    payload: { propName: "color", value: color }
});
export const setTextTransform = (textTransform: TextTransformType): KeycapsAction => ({
    type: LegendStylingActionTypes.setTextTransform,
    payload: { propName: "textTransform", value: textTransform}
});
export const setAlignLegend = (alignItems: FlexPositions): KeycapsAction => ({
    type: LegendStylingActionTypes.setAlignLegend,
    payload:  { propName: "alignItems", value: alignItems }
});
export const setJustifyLegend = (justifyContent: FlexPositions): KeycapsAction => ({
    type: LegendStylingActionTypes.setJustifyLegend,
    payload: { propName: "justifyContent", value: justifyContent }
});
