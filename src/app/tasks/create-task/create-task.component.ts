import { Component } from '@angular/core';
import { CreateTaskModel } from './create-task-model';
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

  model = new CreateTaskModel();

  onSubmit() {
    this.taskService.create(this.model).subscribe((success) => {
      if (success) {
        this.router.navigate(['tasks']);
      }
    });
  }
}
