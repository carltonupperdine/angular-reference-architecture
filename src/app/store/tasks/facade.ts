import { taskCompleted, tasksLoadRequested } from './actions';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTasks } from './selectors';

@Injectable()
export class TaskFacade {
  tasks$ = this.store.select(selectAllTasks);

  constructor(private store: Store) {
    this.store.dispatch(tasksLoadRequested());
  }

  complete(id: number) {
    this.store.dispatch(taskCompleted({ id: id }));
  }
}
