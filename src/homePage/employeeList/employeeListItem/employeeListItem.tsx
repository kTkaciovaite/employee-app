import React from "react";

import { IEmployee } from "../../../types/employee";
import { useGlobalState } from "../../../store/state";

interface IEmployeeListItemProps {
    employee: IEmployee;
}

const EmployeeListItem = (props: IEmployeeListItemProps) => {
    const [selectedEmployeeId, setSelectedEmployeeId] = useGlobalState('selectedEmployeeId');
    const fullName = `${props.employee.firstName} ${props.employee.lastName}`;

    return (
        <div className="employee" onClick={() => setSelectedEmployeeId(props.employee.id)}>
            <img src={require(`../../../../public/img/${props.employee.pic}`)} alt={fullName} />
            <div className="employee-info">
                <div className="employee-name">{fullName}</div>
                <div className="employee-title">{props.employee.title}</div>
            </div>
        </div>
    );
};

export { EmployeeListItem };
