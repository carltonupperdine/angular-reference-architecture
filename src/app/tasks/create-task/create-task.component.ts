import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFacade } from '../../store/tasks';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  model = {
    title: '',
    description: '',
    due: null
  };

  constructor(private facade: TaskFacade, private router: Router) {}

  create() {
    this.facade.create(this.model);
    this.router.navigate(['tasks']);
  }
}
