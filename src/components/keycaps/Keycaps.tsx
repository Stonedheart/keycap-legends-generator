import { useEffect, useState } from 'react';
import { useLegendsStylesContext } from '../../contexts/legendsStylesContext';
import Keycap from '../keycap/Keycap';
import alphanumericLegends from './alphanumericLegends';
import { setKeycapsIndexes } from '../../actions/keycapsSelectionActions';
import { useKeycapsSelectionContext } from '../../contexts/keycapsSelectionContext';

import "./Keycaps.css";


const Keycaps = () => {
    const { legendsStylesState } = useLegendsStylesContext();
    const { dispatch } = useKeycapsSelectionContext();
    const [selectedKeycapsList, setSelectedKeycapsList] = useState<number[]>([]);
    const [isSelectingEnabled, setIsSelectingEnabled] = useState(false);


    useEffect(() => {
        dispatch(setKeycapsIndexes(selectedKeycapsList));
    }, [selectedKeycapsList])

    const toggleKeyCapSelection = (index: number) => {
        selectedKeycapsList.includes(index) ?
            setSelectedKeycapsList(current => current.filter(item => item !== index)) :
            setSelectedKeycapsList(current => [...current, index]);
    }

    const handleMouseDown = (index: number) => {
        setIsSelectingEnabled(true);
        toggleKeyCapSelection(index);
    }

    const handleMouseOver = (index: number) => {
        if (!isSelectingEnabled) {
            return;
        }
        toggleKeyCapSelection(index);
    }

    const handleMouseUp = () => {
        setIsSelectingEnabled(false);
    }

    const handleUnselectClick = () => {
        setSelectedKeycapsList([]);
    }

    return (
        <>
            <div className="keycaps-container">
                {alphanumericLegends.map((legends, index) =>
                    <Keycap
                        key={index}
                        legends={legends}
                        legendsStyles={legendsStylesState[index]}
                        onMouseDown={() => handleMouseDown(index)}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseUp={handleMouseUp}
                        isSelected={selectedKeycapsList.includes(index)}
                    />
                )}
            </div>
            <button
                onClick={handleUnselectClick}
                disabled={selectedKeycapsList.length === 0}
            >
                Unselect
            </button>
        </>
    );
};

export default Keycaps;
