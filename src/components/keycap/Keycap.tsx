import { LegendStyles } from '../../models/legendStyle/legendStyleState';

import './Keycap.css'


interface Props {
    legends: string[];
    legendsStyles: LegendStyles[],
    isSelected: boolean;
    onMouseOver: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

const Keycap = ({
    legends,
    legendsStyles,
    isSelected,
    onMouseOver,
    onMouseDown,
    onMouseUp,
}: Props) => {
    return (
        <div
            className="keycap"
            style={{
                backgroundColor: isSelected ? "lightgreen" : "white"
            }}
            onMouseOver={onMouseOver}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {legends.map((legend, index) => (
                <div
                    key={index}
                    style={legendsStyles[index]}
                >
                    {legend}
                </div>
            ))}
        </div>
    );
};

export default Keycap;
