import { defaultFontFamily, fontFamilyNames } from '../../models/legendStyling/legendStyleFontFamilies';


interface Props {
    onSelect: (name: string) => void;
}

const FontFamilySelect = ({ onSelect }: Props) => {
    return (
        <>
            <label htmlFor="fontFamily">Provide font size: </label>
            <select
                id="fontFamily"
                style={{ marginBottom: 8 }}
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
        </>
    );
};

export default FontFamilySelect;
