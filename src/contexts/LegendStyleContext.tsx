import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/props";
import { LegendStylePropsState } from "../models/legendStyleState";
import { LegendStyleActions } from "../models/legendStyleActions";
import { LegendStyleProp } from "../models/legendStyleProp";
import { ReducerAction } from "../models/reducerAction";
import { useLegendStyleReducer } from "../reducers/legendStyleReducer";

interface LegendStyleContextValue extends LegendStylePropsState {
    dispatch: Dispatch<ReducerAction<LegendStyleActions, LegendStyleProp>>,
}

const LegendStyleContext = createContext({} as LegendStyleContextValue);

const LegendStyleContextProvider = ({ children }: WithChildren) => {
    const [legendStyleState, dispatch] = useLegendStyleReducer();

    return (
        <LegendStyleContext.Provider
            value={{
                ...legendStyleState,
                dispatch
            }}
        >
            {children}
        </LegendStyleContext.Provider>
    );
};

export default LegendStyleContextProvider;

export const useLegendStyleContext = () => useContext(LegendStyleContext);
