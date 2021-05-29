import { ChangeEvent, useState } from 'react';
import { setLegendsIndexes } from '../../actions/keycapsSelectionActions';
import {
    setJustifyLegend,
    setAlignLegend,
    setFontFamily,
    setFontSize,
    setTextTransform,
    setFontColor,
} from '../../actions/legendStyleActions';
import { useKeycapsSelectionContext } from '../../contexts/keycapsSelectionContext';
import { useLegendsStylesContext } from '../../contexts/legendsStylesContext';
import { DEFAULT_FONT_SIZE } from '../../models/shared/defaultFontSize';
import { FlexPositions } from '../../models/shared/flexPositions';
import FontFamilySelect from './FontFamilySelect';
import LegendPositioning from './legendPositioning/LegendPositioning';

import "./LegendsStylingForm.css";


const LegendsStylingForm = () => {
    const { dispatch: dispatchLegendStyleAction } = useLegendsStylesContext();
    const { dispatch: dispatchKeycapsSelectionAction, keycapsIndexes, legendsIndexes } = useKeycapsSelectionContext();
    const [fontSizeInputValue, setFontSizeInputValue] = useState(DEFAULT_FONT_SIZE);

    const handleOnLegendPositionClick = (justify: FlexPositions, align: FlexPositions) => {
        dispatchLegendStyleAction(setJustifyLegend(justify, keycapsIndexes, legendsIndexes));
        dispatchLegendStyleAction(setAlignLegend(align, keycapsIndexes, legendsIndexes));
    };

    const handleFontFamilySelection = (name: string) =>  {
        dispatchLegendStyleAction(setFontFamily(name, keycapsIndexes, legendsIndexes));
    };

    const handleOnSelectRadio = (event:  ChangeEvent<HTMLInputElement>) => {
        const indexes = event.target.value ? [parseInt(event.target.value)] : []
        dispatchKeycapsSelectionAction(setLegendsIndexes(indexes));
    };

    const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFontSizeInputValue(parseInt(event.target.value));
        dispatchLegendStyleAction(setFontSize(parseInt(event.target.value), keycapsIndexes, legendsIndexes));
    };

    const hanldeTextTransformCheckboxSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const textTransform = event.target.checked ? "uppercase" : "lowercase";
        dispatchLegendStyleAction(setTextTransform(textTransform, keycapsIndexes, legendsIndexes));
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchLegendStyleAction(setFontColor(event.target.value, keycapsIndexes, legendsIndexes));
    };

    return (
        <div className="form-container">
            <label htmlFor="legendIndex0">legend1</label>
            <input type="radio" value="0" name="legendIndex" id="legendIndex0" onChange={handleOnSelectRadio} />
            <label htmlFor="legendIndex1">legend2</label>
            <input type="radio" value="1" name="legendIndex" id="legendIndex1" onChange={handleOnSelectRadio} />
            <label htmlFor="allLegends">all</label>
            <input type="radio" value="" name="legendIndex" id="allLegends" onChange={handleOnSelectRadio} />
            <FontFamilySelect onSelect={handleFontFamilySelection} />
            <label htmlFor="fontSize">Provide font size: </label>
            <input
                type="number"
                id="fontSize"
                onChange={handleFontSizeChange}
                style={{ marginBottom: 8 }}
                value={fontSizeInputValue}
            />
            <div style={{ marginBottom: 8 }}>
                <label htmlFor="uppercase">Make upppercase</label>
                <input
                    type="checkbox"
                    id="uppercase"
                    onChange={hanldeTextTransformCheckboxSelect}
                />
            </div>
            <LegendPositioning onLegendPositionClick={handleOnLegendPositionClick} />
            <label htmlFor="colorPicker">
                Choose color:
            </label>
            <input type="color" id="colorPicker" onChange={handleColorChange} />
        </div>
    );
};

export default LegendsStylingForm;
