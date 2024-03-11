export interface IAddTaskBody {

    ID: number,

    TaskSubjectId: number,

    TaskName: string,

    Tasktime: string,

    TaskTypeId: number,

    IsReminder?: boolean,

    TaskSubjectName?: string,

    TaskTypeName?: string,
}

export interface IGetTaskDetailsBody {
    ID: number,
}