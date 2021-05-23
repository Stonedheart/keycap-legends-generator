import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/shared/props";
import { LegendStylePropsState } from "../models/legendStyle/legendStyleState";
import { ReducerAction } from "../models/shared/reducerAction";
import { LegendStyleActions } from "../models/legendStyle/legendStyleActions";
import { LegendStyleProp } from "../models/legendStyle/legendStyleProp";
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
