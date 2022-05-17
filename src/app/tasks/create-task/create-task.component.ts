import { Component } from '@angular/core';
import { EMPTY_TASK } from '../constants';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  private readonly taskService: TaskService;
  public router: Router;

  constructor(taskService: TaskService, router: Router) {
    this.taskService = taskService;
    this.router = router;
  }

  model = EMPTY_TASK;

  create() {
    this.taskService.create(this.model);
    this.router.navigate(['tasks']);
  }
}
