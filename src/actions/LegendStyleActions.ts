import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";
import { TextTransformType } from "../models/legendStyle/textTransformType";


export const setFontFamily = (payload: string) => ({ type: LegendStyleActionTypes.setFontFamily, payload });
export const setFontSize = (payload: string) => ({ type: LegendStyleActionTypes.setFontSize, payload });
export const setTextTransform = (payload: TextTransformType) => ({ type: LegendStyleActionTypes.setTextTransform, payload });
export const setAlignLegend = (payload: FlexPositions) => ({ type: LegendStyleActionTypes.setAlignLegend, payload });
export const setJustifyLegend = (payload: FlexPositions) => ({ type: LegendStyleActionTypes.setJustifyLegend, payload });
export const setFontColor = (payload: string) => ({ type: LegendStyleActionTypes.setFontColor, payload });
export const setSelectedKeycaps = (payload: number[]) => ({ type: LegendStyleActionTypes.setSelectedKeycaps, payload });
