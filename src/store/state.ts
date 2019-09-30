import { createGlobalState } from 'react-hooks-global-state';

import { employees } from "../employeeData";
import { IEmployee } from '../types/employee';

interface IState {
    employees: IEmployee[],
    selectedEmployeeId: number;
}

const initialState: IState = {
    employees,
    selectedEmployeeId: -1
};

const { GlobalStateProvider, setGlobalState, useGlobalState } = createGlobalState(initialState);

export { GlobalStateProvider, useGlobalState };
