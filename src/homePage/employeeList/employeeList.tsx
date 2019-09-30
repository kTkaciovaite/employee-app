import React from "react";

import { useGlobalState } from "../../store/state";
import { EmployeeListItem } from "./employeeListItem/employeeListItem";

import "./employeeList.css";

const EmployeeList = () => {
    const [employees] = useGlobalState('employees');

    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <EmployeeListItem employee={employee} key={employee.id} />
            ))}
        </div>
    );
}

export { EmployeeList };
