import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';

import { Component } from '@angular/core';
import { TaskFacade } from '../../store/tasks';
import { TaskModel } from '../shared/models';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  id$ = this.route.params.pipe(map((params) => +params['id']));
  task$ = this.id$.pipe(mergeMap((id) => this.facade.find(id)));
  title = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facade: TaskFacade
  ) {
    this.id$.subscribe((id) => {
      this.title = `Editing Task ${id}`;
    });
  }

  taskUpdated(task: TaskModel) {
    this.id$.subscribe((id) => {
      this.facade.update({ ...task, id });
      this.router.navigate(['tasks']);
    });
  }
}
