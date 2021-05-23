import { FlexPositions } from '../../../models/flexPositions';

import "./LegendPositioning.css";


interface Props {
    onLegendPositionClick: (justify: FlexPositions, align: FlexPositions) => void;
}

const LegendPositioning = ({ onLegendPositionClick }: Props) => {
    const label = "Legend position:";

    return (
        <>
            <label htmlFor="legendPosition">
                {label}
            </label>
            <div className="positions-list">
                {Object.values(FlexPositions).map((horizontal, indexH) => (
                    Object.values(FlexPositions).map((vertical, indexV) => (
                        <div
                            key={`${indexH}${indexV}`}
                            className="dot-container"
                            style={{
                                justifyContent: vertical,
                                alignItems: horizontal,
                            }}
                            onClick={() => onLegendPositionClick(vertical, horizontal)}
                        >
                            <div className="dot">
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </>
    )
}

export default LegendPositioning
