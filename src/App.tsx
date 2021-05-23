import React, { useState } from 'react';
import './App.css';

const alphanumericKeycapLegends = "1234567890qwertyuiopasdfghjklzxcvbnm";
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

const flexPositions = [
    "flex-start",
    "center",
    "flex-end",
];

const App = () => {
    const [fontFamilyName, setFontFamilyName] = useState("");
    const [fontSize, setFontSize] = useState(16);
    const [isUppercase, setIsUppercase] = useState(false);
    const [justifyLegend, setJustifyLegend] = useState("");
    const [alignLegend, setAlignLegend] = useState("");

    return (
        <div className="App">
            <div
                style={{
                    display: "flex",
                    height: "100%"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >

                        <label htmlFor="fontFamily">Provide font size: </label>
                        <select
                            id="fontFamily"
                            style={{
                                marginBottom: 8
                            }}
                        >
                            {fontFamilyNames.map(name =>
                                <option onClick={() => { setFontFamilyName(name) }}>{name}</option>
                                )}
                        </select>
                        <label htmlFor="fontSize">Provide font size: </label>
                        <input
                            type="number"
                            id="fontSize"
                            onChange={(e) => setFontSize(parseInt(e.target.value))}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <div
                            style={{
                                marginBottom: 8
                            }}
                        >
                            <label htmlFor="uppercase">Make upppercase</label>
                            <input type="checkbox" id="uppercase" onChange={(e) => setIsUppercase(e.target.checked)} />
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
                            {flexPositions.map((horizontal, indexH) => (
                                flexPositions.map((vertical, indexV) => (
                                    <div
                                        key={`${indexH}${indexV}`}
                                        onClick={() => {
                                            setJustifyLegend(vertical);
                                            setAlignLegend(horizontal);
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
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className="Container">
                        {alphanumericKeycapLegends.split("").map((legend, index) =>
                            <div
                                key={index}
                                className="Keycap"
                                style={{
                                    fontFamily: `${fontFamilyName}`,
                                    fontSize: fontSize,
                                    textTransform: isUppercase ? "uppercase" : "lowercase",
                                    justifyContent: justifyLegend,
                                    alignItems: alignLegend
                                }}
                            >
                                {legend}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
