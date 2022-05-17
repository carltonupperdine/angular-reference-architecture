import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks$: Observable<Task[]>;
  router: Router;

  constructor(private taskService: TaskService, router: Router) {
    this.tasks$ = taskService.getAll$();
    this.router = router;
  }

  complete(id: number) {
    this.taskService.complete(id);
  }
}
