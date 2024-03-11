import { IAddEmployeeBody, IGetEmployeeDetailsBody } from "src/interfaces/Employee/IEmployee";
import http from '../../requests/SchoolService/schoolServices';

const AddEmployeeApi = (data: IAddEmployeeBody) => {
  return http.post<string>('AddEmployee', data);
};

const GetEmployeeListApi = () => {
  return http.post<IAddEmployeeBody[]>('GetEmployeeList');
};

const GetEmployeeDetailsApi = (data: IGetEmployeeDetailsBody) => {
  return http.post<IAddEmployeeBody>('GetEmployeeDetails', data);
};
const UpdateEmployeedetailsApi = (data: IAddEmployeeBody) => {
  return http.post<string>('UpdateEmployeedetails', data);
};
const DeleteEmployeedetailsApi = (data: IGetEmployeeDetailsBody) => {
  return http.post<string>('DeleteEmployee', data);
};
const GetDesignationListApi = () => {
  return http.post<IAddEmployeeBody[]>('GetDesignationList');
};

const EmployeeApi = {
  AddEmployeeApi,
  GetEmployeeListApi,
  GetEmployeeDetailsApi,
  UpdateEmployeedetailsApi,
  DeleteEmployeedetailsApi,
  GetDesignationListApi
};
export default EmployeeApi;
