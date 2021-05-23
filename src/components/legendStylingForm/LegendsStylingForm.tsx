import React from 'react';
import {
    setJustifyLegend,
    setAlignLegend,
    setFontFamily,
    setFontSize,
    setIsUppercase
} from '../../actions/LegendStyleActions';
import { useLegendStyleContext } from '../../contexts/LegendStyleContext';
import { FlexPositions } from '../../models/flexPositions';
import LegendPositioning from './legendPositioning/LegendPositioning';

import "./LegendsStylingForm.css";

const fontFamilyNames = [
    'Beyond',
    'BulletInYourHead',
    'D3Digitalism',
    'D3Digitalism-Italic',
    'DiscoDuck',
    'DiscoDuck-Italic',
    'DiscoDuck-Left-Italic',
    'DiscoDuck-3d',
    'DiscoDuck-3d-Italic',
    'DiscoDuck-Chrome',
    'DiscoDuck-Chrome-Italic',
    'DiscoDuck-Condensed',
    'DiscoDuck-Condensed-Italic',
    'DiscoDuck-Expanded',
    'DiscoDuck-Expanded-Italic',
    'DiscoDuck-Gradient',
    'DiscoDuck-Gradient-Italic',
    'DiscoDuck-Halftone',
    'DiscoDuck-Halftone-Italic',
    'DiscoDuck-Outline',
    'DiscoDuck-Outline-Italic',
    'DiscoDuck-Semi-Italic',
    'Friday13th-Bonus',
    'Friday13th-SH',
    'Friday13th-v12',
    'Justice',
    'Justice-3d',
    'Justice-Academy',
    'Justice-Chrome',
    'Justice-Condensed',
    'Justice-Condensed-Outline',
    'Justice-Condensed-Straight',
    'Justice-Expanded',
    'Justice-Expanded-Outline',
    'Justice-Expanded-Straight',
    'Justice-Gradient',
    'Justice-Gradient-Outline',
    'Justice-Halftone',
    'Justice-Italic',
    'Justice-Laser',
    'Justice-Italic-Left',
    'Justice-Outline',
    'Justice-Outline-Italic',
    'Justice-Semi-Italic',
    'Justice-Outline-Straight',
    'Justice-Straight',
    'Wide-Wake',
    'Wide-Wake-Black',
];

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
