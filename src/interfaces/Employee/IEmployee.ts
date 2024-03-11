export interface IAddEmployeeBody {
    ID: number,
    EmployeeName: string,
    BirthDate: string,
    DesignationId: number,
    Gender: number,
    EmailId: string,
    PhoneNo: string,
    DesignationName?: string,
    DID?: number
}
export interface IGetEmployeeDetailsBody {
    ID: number,
}