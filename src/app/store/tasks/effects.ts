// import { Actions } from '@ngrx/effects';
// import { Injectable } from '@angular/core';
// import { TaskService } from 'src/app/tasks/task.service';

// // import { Action } from '@ngrx/store';
// // import { Observable, of as observableOf } from 'rxjs';
// // import { catchError, map, startWith, switchMap } from 'rxjs/operators';
// // import { Task } from 'src/app/tasks/task.model';

// // import * as taskActions from './actions';

// @Injectable()
// export class TaskStoreEffects {
//   constructor(private taskService: TaskService, private actions$: Actions) {}

//   //   taskCompletedEffect$: Observable<Action> = createEffect(() => {
//   //     return this.actions$.pipe(
//   //       ofType<taskActions.TaskCompleteAction>(
//   //         taskActions.ActionTypes.TASK_COMPLETE
//   //       ),
//   //       switchMap((action: taskActions.TaskCompleteAction) =>
//   //         this.taskService.complete(action.payload).
//   //       )
//   //     );
//   //   });

//   //   @Effect()
//   //   loginRequestEffect$: Observable<Action> = this.actions$.pipe(
//   //     ofType<featureActions.LoginRequestAction>(
//   //       featureActions.ActionTypes.LOGIN_REQUEST
//   //     ),
//   //     switchMap(action =>
//   //       this.taskService
//   // 	.login(action.payload.userName, action.payload.password)
//   // 	.pipe(
//   // 	  map(
//   // 	    user =>
//   // 	      new featureActions.LoginSuccessAction({
//   // 		user
//   // 	      })
//   // 	  ),
//   // 	  catchError(error =>
//   // 	    observableOf(new featureActions.LoginFailureAction({ error }))
//   // 	  )
//   // 	)
//   //     )
//   //   );
// }
