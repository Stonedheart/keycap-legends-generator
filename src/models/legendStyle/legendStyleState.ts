import { FlexPositions } from "../shared/flexPositions";
import { TextTransformType } from "./textTransformType";

export interface LegendStyles {
    fontFamily: string,
    fontSize: number,
    textTransform: TextTransformType,
    justifyContent: FlexPositions,
    alignItems: FlexPositions,
    color: string,
}
