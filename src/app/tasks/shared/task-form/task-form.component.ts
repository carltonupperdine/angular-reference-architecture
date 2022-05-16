import { Component, Input, Output } from '@angular/core';
import { EMPTY_TASK } from '../../constants';
import { EventEmitter } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input() action: string = 'Create';
  @Input() task: Task = EMPTY_TASK;
  @Output() submitted = new EventEmitter<Task>();
}
