import { ActionTypes, newTask, taskCreated, tasksLoaded } from './task.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, switchMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { TaskService } from '../../tasks/task.service';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.LOAD_TASKS_REQUESTED),
      () =>
        this.taskService
          .getAll()
          .pipe(map((tasks) => tasksLoaded({ items: tasks }))),
      catchError(() => EMPTY)
    );
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(newTask),
      switchMap((action) =>
        this.taskService
          .create(action.task)
          .pipe(map((task) => taskCreated({ task })))
      )
    );
  });

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
