import { createContext, Dispatch, useContext } from "react";
import { Legend } from "../models/legend/legend";
import { WithChildren } from "../models/shared/props";
import { LegendsAction, LegendsByGlyph, useLegendsReducer } from "../reducers/legendsReducer";


interface LegendsContextValue {
    byGlyph: LegendsByGlyph,
    dispatch: Dispatch<LegendsAction>,
    getLegendByGlyph: (glyph: string) => Legend
}

const LegendsContext = createContext({} as LegendsContextValue);

const LegendsContextProvider = ({ children }: WithChildren) => {
    const [{ byGlyph }, dispatch] = useLegendsReducer();

    const getLegendByGlyph = (glyph: string) => byGlyph[glyph];

    return (
        <LegendsContext.Provider
            value={{
                byGlyph,
                dispatch,
                getLegendByGlyph
            }}
        >
            {children}
        </LegendsContext.Provider>
    );
};

export default LegendsContextProvider;

export const useLegendsContext = () => useContext(LegendsContext);
