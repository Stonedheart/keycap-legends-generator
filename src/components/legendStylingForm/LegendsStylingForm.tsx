import { ChangeEvent, useState } from 'react';
import { selectLegends } from '../../actions/keycapsSelectionActions';
import {
    setJustifyLegend,
    setAlignLegend,
    setFontFamily,
    setFontSize,
    setTextTransform,
    setFontColor,
} from '../../actions/legendStylingActions';
import { useKeycapsContext } from '../../contexts/keycapsContext';
import { DEFAULT_FONT_SIZE } from '../../models/shared/defaultFontSize';
import { FlexPositions } from '../../models/shared/flexPositions';
import FontFamilySelect from './FontFamilySelect';
import LegendPositioning from './legendPositioning/LegendPositioning';

import "./LegendsStylingForm.css";


const LegendsStylingForm = () => {
    const { dispatch } = useKeycapsContext();
    const [fontSizeInputValue, setFontSizeInputValue] = useState(DEFAULT_FONT_SIZE);

    const handleOnLegendPositionClick = (justify: FlexPositions, align: FlexPositions) => {
        dispatch(setJustifyLegend(justify));
        dispatch(setAlignLegend(align));
    };

    const handleFontFamilySelection = (name: string) =>  {
        dispatch(setFontFamily(name));
    };

    const handleOnSelectRadio = (event:  ChangeEvent<HTMLInputElement>) => {
        const indexes = event.target.value ? [parseInt(event.target.value)] : []
        dispatch(selectLegends(indexes));
    };

    const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFontSizeInputValue(parseInt(event.target.value));
        dispatch(setFontSize(parseInt(event.target.value)));
    };

    const hanldeTextTransformCheckboxSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const textTransform = event.target.checked ? "uppercase" : "lowercase";
        dispatch(setTextTransform(textTransform));
    };

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFontColor(event.target.value));
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
