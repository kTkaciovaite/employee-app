import React from "react";

import { useGlobalState } from "../../store/state";
import "./header.css";

interface IHeaderProps {
    text: string;
    hasCloseIcon?: boolean;
}

const Header = (props: IHeaderProps) => {
    const [selectedEmployeeId, setSelectedEmployeeId] = useGlobalState('selectedEmployeeId');

    return (
        !props.hasCloseIcon || selectedEmployeeId !== -1 ? (
            <div className="header">
                <div className="header-text">{props.text}</div>
                {
                    props.hasCloseIcon &&
                    <div className="close-icon" onClick={() => setSelectedEmployeeId(-1)}>x</div>
                }
            </div>
        ) : null
    );
};

export { Header };
