import React from "react";

import { EmployeeList } from "./employeeList/employeeList";
import { Header } from "../common/header/header";

const HomePage = () => {
    return (
        <div className="home-page page">
            <Header text="Employee Directory" />
            <EmployeeList />
        </div>
    );
}

export { HomePage };
