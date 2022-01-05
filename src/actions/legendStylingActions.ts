import { FlexPositions } from "../models/shared/flexPositions";
import { LegendsActionTypes } from "../models/legend/legendsActionTypes";
import { TextTransformType } from "../models/legendStyling/textTransformType";
import { LegendsAction } from "../reducers/legendsReducer";


export const setFontFamily = (fontFamily: string): LegendsAction => ({
    type: LegendsActionTypes.setFontFamily,
    payload: { propName: "fontFamily", value: fontFamily }
});

export const setFontSize = (fontSize: number): LegendsAction => ({
    type: LegendsActionTypes.setFontSize,
    payload: { propName: "fontSize", value: fontSize }
});

export const setFontColor = (color: string,): LegendsAction => ({
    type: LegendsActionTypes.setFontColor,
    payload: { propName: "color", value: color }
});

export const setTextTransform = (textTransform: TextTransformType): LegendsAction => ({
    type: LegendsActionTypes.setTextTransform,
    payload: { propName: "textTransform", value: textTransform}
});

export const setAlignLegend = (alignItems: FlexPositions): LegendsAction => ({
    type: LegendsActionTypes.setAlignLegend,
    payload:  { propName: "alignItems", value: alignItems }
});

export const setJustifyLegend = (justifyContent: FlexPositions): LegendsAction => ({
    type: LegendsActionTypes.setJustifyLegend,
    payload: { propName: "justifyContent", value: justifyContent }
});
