export interface Task {
  id: number;
  title: string;
  description: string;
  due?: Date;
  complete: boolean;
}

export interface WritableTask {
  title: string;
  description: string;
  due?: Date;
}

export interface ModifiedTask extends WritableTask {
  id: number;
}

export interface TaskModel {
  title: string;
  description: string;
  due?: Date;
  complete: boolean;
}
