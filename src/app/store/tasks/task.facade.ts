import { ModifiedTask, TaskModel } from 'src/app/tasks/shared/models';
import {
  newTask,
  taskCompleted,
  taskUpdated,
  tasksLoadRequested
} from './task.actions';
import { selectAllTasks, selectTaskById } from './task.selectors';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class TaskFacade {
  tasks$ = this.store.select(selectAllTasks);

  constructor(private store: Store) {
    this.store.dispatch(tasksLoadRequested());
  }

  find(id: number) {
    return this.store.select(selectTaskById(id));
  }

  complete(id: number) {
    this.store.dispatch(taskCompleted({ id: id }));
  }

  create(task: TaskModel) {
    this.store.dispatch(newTask({ task: task }));
  }

  update(task: ModifiedTask) {
    this.store.dispatch(taskUpdated({ task }));
  }
}
