import Keycap from '../keycap/Keycap';

import "./Keycaps.css";

const alphanumericKeycapLegends = "1234567890qwertyuiopasdfghjklzxcvbnm";

const Keycaps = () => {
    return (
        <div className="keycaps-container">
            {alphanumericKeycapLegends.split("").map((legend, index) =>
                <Keycap key={index} legend={legend} />
            )}
        </div>
    );
};

export default Keycaps;
