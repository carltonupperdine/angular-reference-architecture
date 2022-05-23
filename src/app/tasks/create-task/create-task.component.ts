import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFacade } from '../../store/tasks';
import { WritableTask } from '../shared/models';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  model: WritableTask | undefined;

  constructor(private facade: TaskFacade, private router: Router) {}

  taskCreated(task: WritableTask) {
    this.facade.create({ ...task, complete: false });
    this.router.navigate(['tasks']);
  }
}
