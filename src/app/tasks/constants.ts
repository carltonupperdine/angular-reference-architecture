export const EMPTY_TASK = {
  id: 0,
  title: '',
  description: '',
  complete: false
};

export type TaskDueDateColors =
  | 'completed'
  | 'overdue'
  | 'due-soon'
  | 'not-due'
  | '';
