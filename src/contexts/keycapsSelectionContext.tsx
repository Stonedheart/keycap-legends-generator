import { createContext, Dispatch, useContext } from "react";
import { WithChildren } from "../models/shared/props";
import { ReducerAction } from "../models/shared/reducerAction";
import { useKeycapsSelectionReducer } from "../reducers/keycapsSelectionReducer";
import { KeycapsSelectionActionTypes } from "../models/keycapsSelection/keycapsSelectionActionTypes";
import { KeycapsSelectionState } from "../models/keycapsSelection/keycapsSelectionState";


interface KeycapsSelectionContextValue extends KeycapsSelectionState {
    dispatch: Dispatch<ReducerAction<KeycapsSelectionActionTypes, number[]>>;
}

const KeycapsSelectionContext = createContext({} as KeycapsSelectionContextValue);

const KeycapsSelectionContextProvider = ({ children }: WithChildren) => {
    const [{ keycapsIndexes, legendsIndexes }, dispatch] = useKeycapsSelectionReducer();

    return (
        <KeycapsSelectionContext.Provider
            value={{
                keycapsIndexes,
                legendsIndexes,
                dispatch
            }}
        >
            {children}
        </KeycapsSelectionContext.Provider>
    );
};

export default KeycapsSelectionContextProvider;

export const useKeycapsSelectionContext = () => useContext(KeycapsSelectionContext);
