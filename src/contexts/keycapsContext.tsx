import { createContext, Dispatch, useContext } from "react";
import { Keycap } from "../models/keycap/keycap";
import { WithChildren } from "../models/shared/props";
import { KeycapsAction, useKeycapsReducer } from "../reducers/keycapsReducer";


interface KeycapsContextValue {
    keycaps: Keycap[]
    dispatch: Dispatch<KeycapsAction>,
}

const KeycapsContext = createContext({} as KeycapsContextValue);

const KeycapsContextProvider = ({ children }: WithChildren) => {
    const [{ keycaps }, dispatch] = useKeycapsReducer();

    return (
        <KeycapsContext.Provider
            value={{
                keycaps,
                dispatch
            }}
        >
            {children}
        </KeycapsContext.Provider>
    );
};

export default KeycapsContextProvider;

export const useKeycapsContext = () => useContext(KeycapsContext);
