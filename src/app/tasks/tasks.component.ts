import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFacade } from '../store/tasks';
import { map } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks$ = this.facade.tasks$.pipe(
    map((tasks) => tasks.sort((a, b) => a.id - b.id))
  );

  constructor(public router: Router, private facade: TaskFacade) {}

  complete(id: number) {
    this.facade.complete(id);
  }
}
