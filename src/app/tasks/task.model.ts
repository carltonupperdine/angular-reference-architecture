export interface Task {
  id: number;
  title: string;
  description: string;
  due?: Date | null;
  complete: boolean;
}
