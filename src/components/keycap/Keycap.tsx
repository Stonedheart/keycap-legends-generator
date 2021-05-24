import { useLegendStyleContext } from '../../contexts/LegendStyleContext';

import './Keycap.css';


interface Props {
    legend: string;
    isSelected: boolean;
    onMouseOver: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

const Keycap = ({
    legend,
    isSelected,
    onMouseOver,
    onMouseDown,
    onMouseUp,
}: Props) => {
    const {
        fontFamily,
        fontSize,
        isUppercase,
        justifyLegend,
        alignLegend,
        fontColor
    } = useLegendStyleContext();

    return (
        <div
            className="keycap"
            style={{
                fontFamily,
                fontSize,
                textTransform: isUppercase ? "uppercase" : "lowercase",
                justifyContent: justifyLegend,
                alignItems: alignLegend,
                color: fontColor,
                backgroundColor: isSelected ? "lightgreen" : "white"
            }}
            onMouseOver={onMouseOver}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {legend}
        </div>
    );
};

export default Keycap;
