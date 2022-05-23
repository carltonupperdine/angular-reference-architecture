import { selectAllTasks, selectTaskById } from './task.selectors';
import { taskCompleted, taskUpdated, tasksLoadRequested } from './task.actions';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/tasks/task.model';

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

  update(task: Task) {
    this.store.dispatch(taskUpdated({ task }));
  }
}
