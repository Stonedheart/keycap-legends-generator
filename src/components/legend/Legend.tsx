import "./Legend.css";
import "../keycap/Keycap.css"
import { useLegendsContext } from "../../contexts/legendsContext";


interface Props {
    glyph: string;
}

const Legend = ({ glyph }: Props) => {
    const { getLegendByGlyph } = useLegendsContext();
    const legend = getLegendByGlyph(glyph);

    return (
        <div
            className="keycap-shape legend"
            style={legend.styles}
        >
            {glyph}
        </div>
    )
}

export default Legend;
