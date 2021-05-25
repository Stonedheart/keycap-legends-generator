import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/shared/props";
import LegendStylePropsState from "../models/legendStyle/legendStyleState";
import { ReducerAction } from "../models/shared/reducerAction";
import LegendStyleProp from "../models/legendStyle/legendStyleProp";
import { useLegendStyleReducer } from "../reducers/legendStyleReducer";
import LegendStyleActions from "../models/legendStyle/LegendStyleActions";


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
