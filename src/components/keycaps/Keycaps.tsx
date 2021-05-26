import { useEffect, useState } from 'react';
import { useLegendStyleContext } from '../../contexts/LegendStyleContext';
import Keycap from '../keycap/Keycap';
import alphanumericLegends from './alphanumericLegends';
import { setSelectedKeycaps } from '../../actions/legendStyleActions';

import "./Keycaps.css";

const Keycaps = () => {
    const { dispatch } = useLegendStyleContext();
    const [selectedKeycapsList, setSelectedKeycapsList] = useState<number[]>([]);
    const [isSelectingEnabled, setIsSelectingEnabled] = useState(false);
    const [operateOnSelectedOnly, setOperateOnSelectedOnly] = useState(selectedKeycapsList.length > 0);

    useEffect(() => {
        setOperateOnSelectedOnly(selectedKeycapsList.length > 0);
    }, [selectedKeycapsList.length]);

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
        dispatch(setSelectedKeycaps(selectedKeycapsList));
    }

    const handleUnselectClick = () => {
        dispatch(setSelectedKeycaps([]));
        setSelectedKeycapsList([]);
    }

    return (
        <>
            <div className="keycaps-container">
                {alphanumericLegends.map((legends, index) =>
                    <Keycap
                        key={index}
                        legends={legends}
                        onMouseDown={() => handleMouseDown(index)}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseUp={handleMouseUp}
                        isSelected={selectedKeycapsList.includes(index)}
                        operateOnSelectedOnly={operateOnSelectedOnly}
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
