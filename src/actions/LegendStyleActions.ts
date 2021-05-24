import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyleActions } from "../models/legendStyle/legendStyleActions";

export const setFontFamily = (payload: string) => ({ type: LegendStyleActions.setFontFamily, payload });
export const setFontSize = (payload: string) => ({ type: LegendStyleActions.setFontSize, payload });
export const setIsUppercase = (payload: boolean) => ({ type: LegendStyleActions.setIsUppercase, payload });
export const setAlignLegend = (payload: FlexPositions) => ({ type: LegendStyleActions.setAlignLegend, payload });
export const setJustifyLegend = (payload: FlexPositions) => ({ type: LegendStyleActions.setJustifyLegend, payload });
export const setFontColor = (payload: string) => ({ type: LegendStyleActions.setFontColor, payload });
