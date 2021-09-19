import { useState } from 'react';
import { Keycap as KeycapModel } from '../../models/keycap/keycap';
import { selectKeycaps, unselectKeycaps } from '../../actions/keycapsSelectionActions';
import Keycap from '../keycap/Keycap';
import "./Keycaps.css";
import { useKeycapsContext } from '../../contexts/keycapsContext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import KeycapsPdf from '../keycacpsPdf/KeycapsPdf';


const Keycaps = () => {
    const { dispatch, keycaps } = useKeycapsContext();
    const [isSelectingEnabled, setIsSelectingEnabled] = useState(false);
        
    const toggleKeyCapSelection = (keycap: KeycapModel, keycapIndex: number) => {
        if (keycap.isSelected) {
            dispatch(unselectKeycaps([keycapIndex]));
        } else {
            dispatch(selectKeycaps([keycapIndex]));
        }
    }

    const handleMouseDown = (keycap: KeycapModel, index: number) => {
        setIsSelectingEnabled(true);
        toggleKeyCapSelection(keycap, index);
    }

    const handleMouseOver = (keycap: KeycapModel, index: number) => {
        if (!isSelectingEnabled) {
            return;
        }
        toggleKeyCapSelection(keycap, index);
    }

    const handleMouseUp = () => {
        setIsSelectingEnabled(false);
    }

    const handleUnselectAllClick = () => {
        dispatch(unselectKeycaps(Object.keys(keycaps).map(key => parseInt(key))));
    }

    return (
        <>
            <div className="keycaps-container">
                {keycaps.map((keycap, index) =>
                    <Keycap
                        key={index}
                        legends={keycap.legends}
                        onMouseDown={() => handleMouseDown(keycap, index)}
                        onMouseOver={() => handleMouseOver(keycap, index)}
                        onMouseUp={handleMouseUp}
                        isSelected={keycap.isSelected}
                    />
                )}
            </div>
            <button
                onClick={handleUnselectAllClick}
                disabled={keycaps.filter(keycap => keycap.isSelected).length === 0}
            >
                Unselect All
            </button>
            <PDFDownloadLink
                document={<KeycapsPdf keycaps={keycaps} />}
                fileName="keycaps2print.pdf"
            >
                {({ loading }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </>
    );
};

export default Keycaps;
