import { useReducer } from "react";
import { FlexPositions } from "../models/shared/flexPositions";
import { LegendStyle } from "../models/legendStyling/legendStyle";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStylingActionTypes } from "../models/legendStyling/legendStylingActionTypes";
import { LegendStylingPayload } from "../models/legendStyling/legendStylingPayload";
import { DEFAULT_FONT_SIZE } from "../models/shared/defaultFontSize";
import { keycapsList } from "../models/keycap/keycapsList";
import { Keycap } from "../models/keycap/keycap";
import { Legend } from "../models/legend";
import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";


const defaultLegendStyleState: LegendStyle = {
    fontFamily: "sans-serif",
    fontSize: DEFAULT_FONT_SIZE,
    textTransform: "lowercase",
    alignItems: FlexPositions.flexStart,
    justifyContent: FlexPositions.flexStart,
    color: "#000000", //black
}

type KeycapsState = {
    keycaps: Keycap[];
}

export type KeycapsAction = ReducerAction<LegendStylingActionTypes, LegendStylingPayload> | ReducerAction<KeycapsSelectionActionTypes, number[]>;

const initializeState = (): KeycapsState => ({
    keycaps: keycapsList.map(keycap => ({
        size: keycap.size,
        isSelected: false,
        legends: keycap.legends.map(legend => ({
            glyph: legend,
            styles: defaultLegendStyleState,
            isSelected: true
        } as Legend)),
    } as Keycap))
})

const defaultState: KeycapsState = initializeState();

const keycapsReducer = (
    state: KeycapsState,
    action: KeycapsAction
): KeycapsState => {
    const { keycaps } = state;
    let selectedKeycaps = keycaps.filter(keycap => keycap.isSelected);

    if (!selectedKeycaps.length) {
        selectedKeycaps = keycaps;
    }

    switch(action.type) {
        case KeycapsSelectionActionTypes.selectKeycaps:
            action.payload.forEach(keycapIndex => keycaps[keycapIndex].isSelected = true);
            break;
        case KeycapsSelectionActionTypes.selectLegends:
            selectedKeycaps.forEach(keycap => {
                const legendsLenght = keycap.legends.length;
                if (!legendsLenght) {
                    return;
                }
                //There can be only all or one legend selected. Selecting one deselect rest, if they exist.
                const legendsIndexes = action.payload;
                if (legendsIndexes.length === 1) {
                    keycap.legends.forEach((legend, index) => {
                        if (index === legendsIndexes[0]) {
                            legend.isSelected = true;
                            return;
                        }
                        legend.isSelected = false;
                    });
                    return;
                }

                legendsIndexes.forEach(legendIndex => {
                    if (legendIndex > legendsLenght) {
                        return;
                    }
                    keycap.legends[legendIndex].isSelected = true;
                })
            });
            break;
        case KeycapsSelectionActionTypes.unselectKeycaps:
            action.payload.forEach(keycapIndex => keycaps[keycapIndex].isSelected = false);
            break;
    }

    return { ...state };
};


export const useKeycapsReducer = () => useReducer(keycapsReducer, defaultState);
