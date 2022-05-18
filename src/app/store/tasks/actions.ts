// import { Action } from '@ngrx/store';
// import { Task } from 'src/app/tasks/task.model';

// export enum ActionTypes {
//   LOAD_REQUEST = '[Tasks] Load Request',
//   LOAD_FAILURE = '[Tasks] Load Failure',
//   LOAD_SUCCESS = '[Tasks] Load Success',
//   TASK_COMPLETE = '[Tasks] Task Complete'
// }

// export class LoadRequestAction implements Action {
//   readonly type = ActionTypes.LOAD_REQUEST;
// }

// export class LoadFailureAction implements Action {
//   readonly type = ActionTypes.LOAD_FAILURE;
//   constructor(public payload: { error: string }) {}
// }

// export class LoadSuccessAction implements Action {
//   readonly type = ActionTypes.LOAD_SUCCESS;
//   constructor(public payload: { items: Task[] }) {}
// }

// export class TaskCompleteAction implements Action {
//   readonly type = ActionTypes.TASK_COMPLETE;
//   constructor(public payload: { id: number }) {}
// }

// export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
