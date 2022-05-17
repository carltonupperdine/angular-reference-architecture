import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EMPTY_TASK } from '../constants';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  private router: Router;
  private taskService: TaskService;
  private route: ActivatedRoute;

  task: Task = EMPTY_TASK;

  constructor(taskService: TaskService, route: ActivatedRoute, router: Router) {
    this.taskService = taskService;
    this.route = route;
    this.router = router;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const task = this.taskService.get(id);

    if (!task) {
      this.router.navigate(['tasks']);
      return;
    }

    this.task = task;
  }

  update() {
    this.taskService.update(this.task);
    this.router.navigate(['tasks']);
  }
}
