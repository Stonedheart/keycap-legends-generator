import { WithChildren } from '../../models/shared/props';

import "./Column.css";
import "../../App.css";

const Column = ({ children }: WithChildren) => {
    return (
        <div className="columns-container flex-center">
            {children}
        </div>
    );
};

export default Column;
