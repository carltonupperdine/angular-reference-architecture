import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { TaskStoreSelectors } from '../store/tasks';
import { selectAllTasks } from '../store/tasks/selectors';
import { tasksLoaded } from '../store/tasks/actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  router: Router;
  private store$: Store;
  private taskService: TaskService;

  constructor(router: Router, store: Store, taskService: TaskService) {
    this.tasks$ = store.select(TaskStoreSelectors.selectAllTasks);
    this.store$ = store;
    this.router = router;
    this.taskService = taskService;
  }
  ngOnInit(): void {
    this.tasks$ = this.store$.select(selectAllTasks);
    this.taskService.getAll$().subscribe((tasks) => {
      this.store$.dispatch(tasksLoaded({ items: tasks }));
    });
  }

  complete(id: number) {
    // this.taskService.complete(id);
  }
}
