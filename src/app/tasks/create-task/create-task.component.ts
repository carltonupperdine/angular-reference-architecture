import { Component } from '@angular/core';
import { EMPTY_TASK } from '../constants';
import { Router } from '@angular/router';
import { TaskFacade } from '../../store/tasks';
import { TaskModel } from '../shared/models';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  model: TaskModel = EMPTY_TASK;

  constructor(private facade: TaskFacade, private router: Router) {}

  taskCreated(task: TaskModel) {
    this.facade.create(task);
    this.router.navigate(['tasks']);
  }
}
