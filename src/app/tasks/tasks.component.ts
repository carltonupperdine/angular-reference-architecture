import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  router: Router;

  constructor(taskService: TaskService, router: Router) {
    this.tasks = taskService.getAll();
    this.router = router;
  }
}
