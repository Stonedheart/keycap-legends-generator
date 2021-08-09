import { defaultFontFamily, fontFamilyNames } from '../../models/legendStyling/legendStyleFontFamilies';


interface Props {
    onSelect: (name: string) => void;
}

const FontFamilySelect = ({ onSelect }: Props) => {
    return (
        <div>
            <label htmlFor="fontFamily">Select font family: </label>
            <select
                id="fontFamily"
                style={{ marginBottom: 8, marginLeft: 4 }}
                defaultValue={defaultFontFamily}
            >
                {fontFamilyNames.map(name =>
                    <option
                        key={name}
                        onClick={() => onSelect(name)}
                    >
                        {`${name} ${name === defaultFontFamily ? '(default)' : ''}`}
                    </option>
                )}
            </select>
        </div>
    );
};

export default FontFamilySelect;
