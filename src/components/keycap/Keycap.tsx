import { Keycap as KeycapModel } from '../../models/keycap/keycap';
import Legend from '../legend/Legend';

import "./Keycap.css";


interface Props {
    keycap: KeycapModel
    onMouseOver: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

const Keycap = ({
    keycap: { isSelected, size, legends },
    onMouseOver,
    onMouseDown,
    onMouseUp,
}: Props) => {
    return (
        <div
            className="keycap-shape keycap"
            style={{
                backgroundColor: isSelected ? "lightgreen" : "white",
                width: size * (45.6 - 7.6), /*~12mm - ~2mm*/
            }}
            onMouseOver={onMouseOver}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {legends.map((legend, index) => (
                <Legend key={index} glyph={legend}/>
            ))}
        </div>
    );
};

export default Keycap;
