import { useState } from 'react';
import Keycap from '../keycap/Keycap';

import "./Keycaps.css";


const alphanumericKeycapLegends = "1234567890qwertyuiopasdfghjklzxcvbnm";

const Keycaps = () => {
    const [selectedKeycaps, setSelectedKeycaps] = useState<number[]>([]);
    const [isSelectingEnabled, setIsSelectingEnabled] = useState(false);

    const toggleKeyCapSelection = (index: number) => {
        selectedKeycaps.includes(index) ?
            setSelectedKeycaps(current => current.filter(item => item !== index)) :
            setSelectedKeycaps(current => [...current, index]);
    }

    const handleMouseDown = (index: number) => {
        setIsSelectingEnabled(true);
        toggleKeyCapSelection(index);
    }

    const handleMouseOver = (index: number) => {
        if (!isSelectingEnabled) {
            return;
        }
        toggleKeyCapSelection(index)
    }

    const handleMouseUp = (index: number) => {
        setIsSelectingEnabled(false);
        toggleKeyCapSelection(index);
    }

    return (
        <div className="keycaps-container">
            {alphanumericKeycapLegends.split("").map((legend, index) =>
                <Keycap
                    key={index}
                    legend={legend}
                    onMouseDown={() => handleMouseDown(index)}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseUp={() => handleMouseUp(index)}
                    isSelected={selectedKeycaps.includes(index)}
                />
            )}
        </div>
    );
};

export default Keycaps;
