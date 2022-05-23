import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { TaskFacade } from '../store/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks$ = this.facade.tasks$;

  constructor(public router: Router, private facade: TaskFacade) {}

  complete(id: number) {
    this.facade.complete(id);
  }
}
