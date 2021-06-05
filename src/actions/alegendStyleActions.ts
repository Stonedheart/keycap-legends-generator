import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";
import { TextTransformType } from "../models/legendStyle/textTransformType";


export const setFontFamily = (fontFamily: string, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setFontFamily,
    payload: { valueToUpdate: fontFamily, keycapsIndexes, legendsIndexes }
});
export const setFontSize = (fontSize: number, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setFontSize,
    payload: { valueToUpdate: fontSize, keycapsIndexes, legendsIndexes }
});
export const setFontColor = (color: string, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setFontColor,
    payload: { valueToUpdate: color, keycapsIndexes, legendsIndexes }
});
export const setTextTransform = (textTransform: TextTransformType, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setTextTransform,
    payload: { valueToUpdate: textTransform, keycapsIndexes, legendsIndexes}
});
export const setAlignLegend = (alignItems: FlexPositions, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setAlignLegend,
    payload:  { valueToUpdate: alignItems, keycapsIndexes, legendsIndexes }
});
export const setJustifyLegend = (justifyContent: FlexPositions, keycapsIndexes: number[], legendsIndexes: number[]) => ({
    type: LegendStyleActionTypes.setJustifyLegend,
    payload: { valueToUpdate: justifyContent, keycapsIndexes,  legendsIndexes }
});
