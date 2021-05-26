import {
    setJustifyLegend,
    setAlignLegend,
    setFontFamily,
    setFontSize,
    setTextTransform,
    setFontColor
} from '../../actions/legendStyleActions';
import { useLegendStyleContext } from '../../contexts/LegendStyleContext';

import { FlexPositions } from '../../models/shared/flexPositions';
import FontFamilySelect from './FontFamilySelect';
import LegendPositioning from './legendPositioning/LegendPositioning';

import "./LegendsStylingForm.css";


const LegendsStylingForm = () => {
    const { dispatch, fontSize } = useLegendStyleContext();

    const handleOnLegendPositionClick = (justify: FlexPositions, align: FlexPositions) => {
        dispatch(setJustifyLegend(justify));
        dispatch(setAlignLegend(align));
    };

    const handleFontFamilySelection = (name: string) =>  { dispatch(setFontFamily(name)) };

    return (
        <div className="form-container">
            <FontFamilySelect onSelect={handleFontFamilySelection} />
            <label htmlFor="fontSize">Provide font size: </label>
            <input
                type="number"
                id="fontSize"
                onChange={(e) => dispatch(setFontSize(e.target.value))}
                style={{ marginBottom: 8 }}
                value={fontSize}
            />
            <div style={{ marginBottom: 8 }}>
                <label htmlFor="uppercase">Make upppercase</label>
                <input
                    type="checkbox"
                    id="uppercase"
                    onChange={(e) => { dispatch(setTextTransform(e.target.checked ? "uppercase" : "lowercase")) }}
                />
            </div>
            <LegendPositioning onLegendPositionClick={handleOnLegendPositionClick} />
            <label htmlFor="colorPicker">
                Choose color:
            </label>
            <input type="color" id="colorPicker" onChange={(e) => dispatch(setFontColor(e.target.value))} />
        </div>
    );
};

export default LegendsStylingForm;
