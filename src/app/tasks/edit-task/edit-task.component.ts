import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';

import { Component } from '@angular/core';
import { TaskFacade } from '../../store/tasks';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  id$ = this.route.params.pipe(map((params) => +params['id']));
  task$ = this.id$.pipe(mergeMap((id) => this.facade.find(id)));
  title$ = this.task$.pipe(map((task) => `Editing Task ${task?.id}`));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facade: TaskFacade
  ) {}

  update() {
    this.task$.subscribe((task) => {
      if (!task) return;
      this.facade.update(task);
      this.router.navigate(['tasks']);
    });
  }
}
