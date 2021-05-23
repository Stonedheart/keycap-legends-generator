import { createContext, useContext } from "react";
import { WithChildren } from "../models/props";
import { LegendStylePropsState } from "../models/legendStyleState";


const LegendStyleContext = createContext({} as LegendStylePropsState);

interface Props extends WithChildren {
    state: LegendStylePropsState,
}

const LegendStyleContextProvider = ({ children, state }: Props) => (
    <LegendStyleContext.Provider value={state}>
        {children}
    </LegendStyleContext.Provider>
);

export default LegendStyleContextProvider;

export const useLegendStyleContext = () => useContext(LegendStyleContext);
