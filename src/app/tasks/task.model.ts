export interface Task {
  id: string | number;
  title: string;
  description: string;
  due?: Date | null;
  complete: boolean;
}
