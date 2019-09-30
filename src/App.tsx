import React from "react";

import { GlobalStateProvider } from "./store/state";
import { HomePage } from "./homePage/homePage";
import { EmployeePage } from "./employeePage/employeePage";

import "./App.css";

const App = () => {
    return (
        <GlobalStateProvider>
            <div className="employee-app">
                <HomePage />
                <EmployeePage />
            </div>
        </GlobalStateProvider>
    );
}

export  { App };
