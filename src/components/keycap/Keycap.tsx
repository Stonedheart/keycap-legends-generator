import { useEffect, useState } from 'react';
import { useLegendStyleContext } from '../../contexts/LegendStyleContext';

import './Keycap.css';


interface Props {
    legend: string;
    isSelected: boolean;
    onMouseOver: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    operateOnSelectedOnly: boolean;
}

const Keycap = ({
    legend,
    isSelected,
    onMouseOver,
    onMouseDown,
    onMouseUp,
    operateOnSelectedOnly
}: Props) => {
    const {
        fontFamily,
        fontSize,
        textTransform,
        justifyLegend,
        alignLegend,
        fontColor
    } = useLegendStyleContext();

    const [legendFontFamily, setLegendFontFamily] = useState(fontFamily);
    const [legendFontSize, setLegendFontSize] = useState(fontSize);
    const [legendFontColor, setLegendFontColor] = useState(fontColor);
    const [legendTextTransform, setLegendTextTransform] = useState(textTransform);
    const [legendJustify, setLegendJustify] = useState(justifyLegend);
    const [legendAlign, setLegendAlign] = useState(alignLegend);

    useEffect(() => {
        const updateStateValue = (current: any, value: any) => {
            if ((operateOnSelectedOnly && !isSelected) || (current === value)) {
                return current;
            }
            return value;
        };

        setLegendFontFamily(current => updateStateValue(current, fontFamily));
        setLegendFontSize(current => updateStateValue(current, fontSize));
        setLegendFontColor(current => updateStateValue(current, fontColor));
        setLegendTextTransform(current => updateStateValue(current, textTransform));
        setLegendJustify(current => updateStateValue(current, justifyLegend));
        setLegendAlign(current => updateStateValue(current, alignLegend));
    }, [
        operateOnSelectedOnly,
        isSelected,
        fontFamily,
        fontSize,
        fontColor,
        textTransform,
        justifyLegend,
        alignLegend,
    ]);

    return (
        <div
            className="keycap"
            style={{
                fontFamily: legendFontFamily,
                fontSize: legendFontSize,
                textTransform: legendTextTransform,
                justifyContent: legendJustify,
                alignItems: legendAlign,
                color: legendFontColor,
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
