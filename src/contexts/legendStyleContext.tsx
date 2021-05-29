import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/shared/props";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStylePayload } from "../models/legendStyle/legendStylePayload";
import { KeycapsLegendsStyleState, useLegendStyleReducer } from "../reducers/legendStyleReducer";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";


interface LegendStyleContextValue {
    keycapsLegendsStylesState: KeycapsLegendsStyleState
    dispatch: Dispatch<ReducerAction<LegendStyleActionTypes, LegendStylePayload>>,
}

const LegendStyleContext = createContext({} as LegendStyleContextValue);

const LegendStyleContextProvider = ({ children }: WithChildren) => {
    const [keycapsLegendsStylesState, dispatch] = useLegendStyleReducer();

    return (
        <LegendStyleContext.Provider
            value={{
                keycapsLegendsStylesState,
                dispatch
            }}
        >
            {children}
        </LegendStyleContext.Provider>
    );
};

export default LegendStyleContextProvider;

export const useLegendStyleContext = () => useContext(LegendStyleContext);
