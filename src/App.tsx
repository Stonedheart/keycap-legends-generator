import LegendStyleContextProvider from './contexts/LegendStyleContext';
import { useLegendStyleReducer } from './reducers/legendStyleReducer';
import Keycaps from './components/keycaps/Keycaps';
import Column from './components/column/Column';
import { FlexPositions } from './models/flexPositions';
import { LegendStyleActions } from './models/legendStyleActions';

import './App.css';

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

const App = () => {
    const [legendStyleState, dispatch] = useLegendStyleReducer();

    return (
        <LegendStyleContextProvider state={legendStyleState}>
            <div className="app">
                <div className="app-container">
                    <Column>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label htmlFor="fontFamily">Provide font size: </label>
                            <select
                                id="fontFamily"
                                style={{
                                    marginBottom: 8
                                }}
                            >
                                {fontFamilyNames.map(name =>
                                    <option onClick={() => { dispatch({type: LegendStyleActions.setFontFamily, payload: name}) }}>{name}</option>
                                )}
                            </select>
                            <label htmlFor="fontSize">Provide font size: </label>
                            <input
                                type="number"
                                id="fontSize"
                                onChange={(e) => dispatch({type: LegendStyleActions.setFontSize, payload: e.target.value})}
                                style={{
                                    marginBottom: 8
                                }}
                                value={legendStyleState.fontSize}
                            />
                            <div
                                style={{
                                    marginBottom: 8
                                }}
                            >
                                <label htmlFor="uppercase">Make upppercase</label>
                                <input type="checkbox" id="uppercase" onChange={(e) => { dispatch({type: LegendStyleActions.setIsUppercase, payload: e.target.checked}) }} />
                            </div>
                            <label htmlFor="legendPosition">
                                Legend position:
                            </label>
                            <div
                                style={{
                                    width: 84,
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    fontSize: 8,
                                    marginTop: 8,
                                }}
                            >
                                {Object.values(FlexPositions).map((horizontal, indexH) => (
                                    Object.values(FlexPositions).map((vertical, indexV) => (
                                        <div
                                            key={`${indexH}${indexV}`}
                                            onClick={() => {
                                                dispatch({type: LegendStyleActions.setJustifyLegend, payload: vertical});
                                                dispatch({type: LegendStyleActions.setAlignLegend, payload: horizontal});
                                            }}
                                            style={{
                                                border: "solid 1px black",
                                                padding: 4,
                                                width: 18,
                                                height: 18,
                                                cursor: "pointer",
                                                display: "flex",
                                                justifyContent: vertical,
                                                alignItems: horizontal,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    background: "black",
                                                    borderRadius: "50%",
                                                    width: 5,
                                                    height: 5
                                                }}
                                            >
                                            </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                        </div>
                    </Column>
                    <Column>
                        <Keycaps />
                    </Column>
                </div>
            </div>
        </LegendStyleContextProvider>
    );
}

export default App;
