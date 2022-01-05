import { Keycap } from "../models/keycap/keycap";
import { LegendsActionTypes } from "../models/legend/legendsActionTypes";


export const selectLegends = (index: string, selectedKeycaps: Keycap[]) => ({
    type: LegendsActionTypes.selectLegends,
    payload: { index, selectedKeycaps}
});
