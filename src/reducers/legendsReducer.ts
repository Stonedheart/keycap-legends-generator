import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyle } from "../models/legendStyling/legendStyle";
import { DEFAULT_FONT_SIZE } from "../models/shared/defaultFontSize";
import { LegendStylingPayload } from "../models/legendStyling/legendStylingPayload";
import { Legend } from "../models/legend/legend";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendsActionTypes } from "../models/legend/legendsActionTypes";
import { Keycap } from "../models/keycap/keycap";
import { keycapsList } from "../models/keycap/keycapsList";


interface LegendsSelectionPayload {
    index: string,
    selectedKeycaps: Keycap[]
};

export type LegendsByGlyph = Record<string, Legend>;

type LegendsState = {
    byGlyph: LegendsByGlyph;
}

export type LegendsAction = ReducerAction<LegendsActionTypes, LegendStylingPayload | LegendsSelectionPayload>;

const defaultLegendStyleState: LegendStyle = {
    fontFamily: "JetBrainsMono-Regular",
    fontSize: DEFAULT_FONT_SIZE,
    textTransform: "lowercase",
    alignItems: FlexPositions.flexStart,
    justifyContent: FlexPositions.flexStart,
    color: "#000000", //black,
    zIndex: -1
}

const initializeState = (): LegendsState => {
    const glyphs = keycapsList.flatMap(keycap => keycap.legends);
    const state = {
        byGlyph: glyphs.reduce((acc, curr, index) => {
            acc[curr] = {
                glyph: curr,
                styles: {...defaultLegendStyleState, zIndex: index},
                isSelected: true
            } as Legend;
            return acc
        }, {} as LegendsByGlyph)
    };
    return state;
}

const defaultState: LegendsState = initializeState();

const legendsReducer = (
    state: LegendsState,
    action: LegendsAction
): LegendsState => {
    const { byGlyph } = state;
    let selectedLegends = Object.values(byGlyph).filter(legend => legend.isSelected);

    switch(action.type) {
        case LegendsActionTypes.selectLegends:
            let { index, selectedKeycaps } = action.payload as LegendsSelectionPayload;
            let glyphsToUpdate: string[];

            if (!index) {
                glyphsToUpdate = selectedKeycaps.flatMap(keycap => keycap.legends);
            } else {
                const parsedIndex = parseInt(index);
                const keycapsToUpdate = selectedKeycaps.filter(keycap => parsedIndex < keycap.legends.length);
                glyphsToUpdate = keycapsToUpdate.flatMap(keycap => keycap.legends[parsedIndex]);
            }

            Object.values(byGlyph).forEach(legend => {
                if (glyphsToUpdate.includes(legend.glyph)) {
                    legend.isSelected = true;
                    return;
                }
                legend.isSelected = false;
            })
            break;
        case LegendsActionTypes.setFontFamily:
        case LegendsActionTypes.setFontColor:
        case LegendsActionTypes.setFontSize:
        case LegendsActionTypes.setTextTransform:
        case LegendsActionTypes.setAlignLegend:
        case LegendsActionTypes.setJustifyLegend:
            const { propName, value } = action.payload as LegendStylingPayload;
            selectedLegends.forEach(legend => {
                legend.styles = {
                    ...legend.styles,
                    [propName]: value
                }
            });
            break;
    }

    return { ...state };
};

export const useLegendsReducer = () => useReducer(legendsReducer, defaultState);
