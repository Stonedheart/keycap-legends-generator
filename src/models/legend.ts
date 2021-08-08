import { LegendStyle } from "./legendStyling/legendStyle";

export interface Legend {
    glyph: string;
    styles: LegendStyle;
    isSelected: boolean;
}
