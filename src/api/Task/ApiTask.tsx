import { IAddTaskBody, IGetTaskDetailsBody } from "src/interfaces/Task/ITask";
import http from '../../requests/SchoolService/schoolServices';



const GetTaskSubjectListApi = () => {
    return http.post<IAddTaskBody[]>('GetTaskSubjects');
};

const GetTaskTypeListApi = () => {
    return http.post<IAddTaskBody[]>('GetTaskType');
};

const GetTaskDetailsApi = (data: IGetTaskDetailsBody) => {
    return http.post<IAddTaskBody>('GetTaskDetails', data);
};

const AddTaskApi = (data: IAddTaskBody) => {
    return http.post<string>('AddTasks', data);
  };

  const GetTaskListApi = () => {
    return http.post<IAddTaskBody[]>('GetTasksList');
  };
  
  const UpdateTaskdetailsApi = (data: IAddTaskBody) => {
    return http.post<string>('UpdateTaskDetails', data);
  };

  const DeleteTaskdetailsApi = (data: IGetTaskDetailsBody) => {
    return http.post<string>('DeleteTasks', data);
  };

const TaskApi = {
    DeleteTaskdetailsApi,
    UpdateTaskdetailsApi,
    GetTaskListApi,
    GetTaskSubjectListApi,
    GetTaskDetailsApi,
    GetTaskTypeListApi,
    AddTaskApi
}

export default TaskApi;