import { FlexPositions } from "../shared/flexPositions";

export default interface LegendStylePropsState {
    fontFamily: string,
    fontSize: number,
    textTransform: "lowercase" | "uppercase",
    justifyLegend: FlexPositions,
    alignLegend: FlexPositions,
    fontColor: string,
    selectedKeycaps: number[],
}
