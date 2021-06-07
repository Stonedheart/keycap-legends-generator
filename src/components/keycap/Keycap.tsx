import { LegendStyle } from '../../models/legendStyle/legendStyle';

import './Keycap.css'


interface Props {
    legends: string[];
    legendsStyles: LegendStyle[],
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
            className="keycap-shape keycap"
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
                    className="keycap-shape legend"
                    style={{
                        zIndex: index,
                        ...legendsStyles[index]
                    }}
                >
                    {legend}
                </div>
            ))}
        </div>
    );
};

export default Keycap;
