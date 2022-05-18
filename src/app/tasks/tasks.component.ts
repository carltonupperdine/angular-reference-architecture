import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { taskCompleted, tasksLoadRequested } from '../store/tasks/actions';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from './task.model';
import { selectAllTasks } from '../store/tasks/selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> = EMPTY;
  router: Router;
  private store$: Store;

  constructor(router: Router, store: Store) {
    this.store$ = store;
    this.router = router;
  }

  ngOnInit(): void {
    this.tasks$ = this.store$.select(selectAllTasks);
    this.store$.dispatch(tasksLoadRequested());
  }

  complete(id: number) {
    this.store$.dispatch(taskCompleted({ id }));
  }
}
