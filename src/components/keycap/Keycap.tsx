import { useLegendStyleContext } from '../../contexts/LegendStyleContext';
import './Keycap.css';


interface Props {
    legend: string
}

const Keycap = ({ legend }: Props) => {
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
                color: fontColor
            }}
        >
            {legend}
        </div>
    );
};

export default Keycap;
