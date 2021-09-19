import { Legend } from '../../models/legend';
import './Keycap.css'


interface Props {
    legends: Legend[];
    isSelected: boolean;
    onMouseOver: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

const Keycap = ({
    legends,
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
                    style={legend.styles}
                >
                    {legend.glyph}
                </div>
            ))}
        </div>
    );
};

export default Keycap;
