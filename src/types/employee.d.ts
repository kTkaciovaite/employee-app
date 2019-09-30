interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    reports: number;
    managerId?: number;
    title: string;
    managerName?: string;
    department: string;
    mobilePhone: string;
    officePhone: string;
    email: string;
    city: string;
    pic: string;
    twitterId: string;
    blog: string;
}

export { IEmployee };
