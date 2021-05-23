import React from 'react';
import { FlexPosition } from '../../models/flexPosition';
import './Keycap.css';

interface Props {
    fontFamily: string,
    fontSize: number,
    isUppercase: boolean,
    justifyLegend: FlexPosition,
    alignLegend: FlexPosition,
    legend: string
}

const Keycap = ({
    fontFamily,
    fontSize,
    isUppercase,
    justifyLegend,
    alignLegend,
    legend
}: Props) => {
    return (
        <div
            className="keycap"
            style={{
                fontFamily,
                fontSize,
                textTransform: isUppercase ? "uppercase" : "lowercase",
                justifyContent: justifyLegend,
                alignItems: alignLegend
            }}
        >
            {legend}
        </div>
    );
};

export default Keycap;
