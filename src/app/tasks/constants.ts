import { Task } from './task.model';

export const EMPTY_TASK: Task = {
  id: 0,
  title: '',
  description: '',
  complete: false
};

export type TaskDueDateColors = 'completed' | 'overdue' | 'due-soon' | '';
