import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from 'src/app/tasks/task.model';

export const featureAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (model) => model.id
  // sortComparer: (a: Task, b: Task): number =>
  //   b.someDate.toString().localeCompare(a.someDate.toString())
});

export interface State extends EntityState<Task> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
