export interface Task {
  id: number;
  title: string;
  description: string;
  due?: Date;
  complete: boolean;
}

export interface TaskModel {
  title: string;
  description: string;
  due?: Date;
  complete: boolean;
}

export interface TaskModelWithId extends TaskModel {
  id: number;
}
