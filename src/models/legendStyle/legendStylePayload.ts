import LegendStyleProp from "./legendStyleProp";

export interface LegendStylePayload {
    legendsIndexes: number[];
    keycapsIndexes: number[];
    valueToUpdate: LegendStyleProp;
}
