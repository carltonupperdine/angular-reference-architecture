import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { EMPTY_TASK } from '../constants';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  task: Task = EMPTY_TASK;
  private router: Router;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    router: Router
  ) {
    route.params.subscribe((params) => {
      const id = +params['id'];
      const task = taskService.get(id);
      if (!task) {
        throw new Error();
      }
      this.task = task;
    });

    this.router = router;
  }

  update() {
    this.taskService.update(this.task);
    this.router.navigate(['tasks']);
  }
}
