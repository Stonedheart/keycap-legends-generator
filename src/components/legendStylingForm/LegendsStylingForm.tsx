import React from 'react';
import {
    setJustifyLegend,
    setAlignLegend,
    setFontFamily,
    setFontSize,
    setIsUppercase
} from '../../actions/LegendStyleActions';
import { useLegendStyleContext } from '../../contexts/LegendStyleContext';
import { fontFamilyNames } from '../../models/legendStyle/legendStyleFontFamilies';
import { FlexPositions } from '../../models/shared/flexPositions';
import LegendPositioning from './legendPositioning/LegendPositioning';

import "./LegendsStylingForm.css";


const LegendsStylingForm = () => {
    const { dispatch, fontSize } = useLegendStyleContext();

    const handleOnLegendPositionClick = (justify: FlexPositions, align: FlexPositions) => {
        dispatch(setJustifyLegend(justify));
        dispatch(setAlignLegend(align));
    }

    return (
        <div className="form-container">
            <label htmlFor="fontFamily">Provide font size: </label>
            <select
                id="fontFamily"
                style={{
                    marginBottom: 8
                }}
            >
                {fontFamilyNames.map(name =>
                    <option onClick={() => { dispatch(setFontFamily(name)) }}>{name}</option>
                )}
            </select>
            <label htmlFor="fontSize">Provide font size: </label>
            <input
                type="number"
                id="fontSize"
                onChange={(e) => dispatch(setFontSize(e.target.value))}
                style={{
                    marginBottom: 8
                }}
                value={fontSize}
            />
            <div
                style={{
                    marginBottom: 8
                }}
            >
                <label htmlFor="uppercase">Make upppercase</label>
                <input type="checkbox" id="uppercase" onChange={(e) => { dispatch(setIsUppercase(e.target.checked)) }} />
            </div>
            <LegendPositioning onLegendPositionClick={handleOnLegendPositionClick}/>
        </div>
    );
};

export default LegendsStylingForm;
