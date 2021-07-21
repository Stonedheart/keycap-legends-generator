import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStylingActionTypes } from "../models/legendStyling/legendStylingActionTypes";
import { TextTransformType } from "../models/legendStyling/textTransformType";


export const setFontFamily = (fontFamily: string, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setFontFamily,
    payload: { valueToUpdate: fontFamily, keycapsIndexes, legendsIndexes }
});
export const setFontSize = (fontSize: number, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setFontSize,
    payload: { valueToUpdate: fontSize, keycapsIndexes, legendsIndexes }
});
export const setFontColor = (color: string, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setFontColor,
    payload: { valueToUpdate: color, keycapsIndexes, legendsIndexes }
});
export const setTextTransform = (textTransform: TextTransformType, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setTextTransform,
    payload: { valueToUpdate: textTransform, keycapsIndexes, legendsIndexes}
});
export const setAlignLegend = (alignItems: FlexPositions, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setAlignLegend,
    payload:  { valueToUpdate: alignItems, keycapsIndexes, legendsIndexes }
});
export const setJustifyLegend = (justifyContent: FlexPositions, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStylingActionTypes.setJustifyLegend,
    payload: { valueToUpdate: justifyContent, keycapsIndexes,  legendsIndexes }
});
