import React from "react";

import { useGlobalState } from "../store/state";
import { Header } from "../common/header/header";

import "./employeePage.css";

const EmployeePage = () => {
    const [employees] = useGlobalState("employees");
    const [selectedEmployeeId] = useGlobalState('selectedEmployeeId');

    const selectedEmployee = employees.find(employee => employee.id === selectedEmployeeId);
    const fullName = selectedEmployee ? `${selectedEmployee.firstName} ${selectedEmployee.lastName}` : "";

    return (
        <div className="employee-page page">
            <Header text="Employee" hasCloseIcon />
            {selectedEmployee && (
                <div className="employee-info">
                    <div className="employee-info-header">
                        <img src={require(`../../public/img/${selectedEmployee.pic}`)} alt={fullName} />
                        <div className="employee-info-content">
                            <div className="employee-name">{fullName}</div>
                            <div className="employee-title">{selectedEmployee.title}</div>
                        </div>
                    </div>
                    <div className="employee-info-item">
                        <div className="title">Call Office</div>
                        <div className="content">{selectedEmployee.officePhone}</div>
                    </div>
                    <div className="employee-info-item">
                        <div className="title">Call Mobile</div>
                        <div className="content">{selectedEmployee.mobilePhone}</div>
                    </div>
                    <div className="employee-info-item">
                        <div className="title">SMS</div>
                        <div className="content">{selectedEmployee.mobilePhone}</div>
                    </div>
                    <div className="employee-info-item">
                        <div className="title">Email</div>
                        <div className="content">{selectedEmployee.email}</div>
                    </div>
                </div>
            )}
        </div>
    )
};

export { EmployeePage };
