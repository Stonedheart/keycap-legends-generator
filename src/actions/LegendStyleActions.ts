import { FlexPositions } from "../models/shared/flexPositions";
import LegendStyleActions from "../models/legendStyle/LegendStyleActions";
import TextTransformType from "../models/legendStyle/tyextTransformType";


export const setFontFamily = (payload: string) => ({ type: LegendStyleActions.setFontFamily, payload });
export const setFontSize = (payload: string) => ({ type: LegendStyleActions.setFontSize, payload });
export const setTextTransform = (payload: TextTransformType) => ({ type: LegendStyleActions.setTextTransform, payload });
export const setAlignLegend = (payload: FlexPositions) => ({ type: LegendStyleActions.setAlignLegend, payload });
export const setJustifyLegend = (payload: FlexPositions) => ({ type: LegendStyleActions.setJustifyLegend, payload });
export const setFontColor = (payload: string) => ({ type: LegendStyleActions.setFontColor, payload });
export const setSelectedKeycaps = (payload: number[]) => ({ type: LegendStyleActions.setSelectedKeycaps, payload });
