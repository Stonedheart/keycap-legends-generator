import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/shared/props";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStylePayload } from "../models/legendStyle/legendStylePayload";
import { LegendsStylesState, useLegendsStylesReducer } from "../reducers/legendsStylesReducer";
import { LegendStyleActionTypes } from "../models/legendStyle/legendStyleActionTypes";


interface LegendsStylesContextValue {
    legendsStylesState: LegendsStylesState
    dispatch: Dispatch<ReducerAction<LegendStyleActionTypes, LegendStylePayload>>,
}

const LegendsStylesContext = createContext({} as LegendsStylesContextValue);

const LegendsStylesContextProvider = ({ children }: WithChildren) => {
    const [legendsStylesState, dispatch] = useLegendsStylesReducer();

    return (
        <LegendsStylesContext.Provider
            value={{
                legendsStylesState,
                dispatch
            }}
        >
            {children}
        </LegendsStylesContext.Provider>
    );
};

export default LegendsStylesContextProvider;

export const useLegendsStylesContext = () => useContext(LegendsStylesContext);
