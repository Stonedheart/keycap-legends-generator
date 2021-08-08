import LegendStylingProp from "./legendStylingProp";

export interface LegendStylingPayload {
    propName: "fontFamily" | "fontSize" | "textTransform" | "justifyContent" | "alignItems" | "color";
    value: LegendStylingProp;
}
