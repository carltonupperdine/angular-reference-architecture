import { Component, Input, OnInit, Output } from '@angular/core';
import { EMPTY_TASK } from '../../constants';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() action: string = 'Create';
  @Input() task: Task = EMPTY_TASK;
  @Output() submitted = new EventEmitter<Task>();

  title = new FormControl('');
  description = new FormControl('');
  due = new FormControl();

  submit() {
    this.task.title = this.title.value;
    this.task.description = this.description.value;
    this.task.due = this.due.value;
    this.submitted.emit(this.task);
  }

  ngOnInit(): void {
    if (!this.task) return;
    this.title.setValue(this.task.title);
    this.description.setValue(this.task.description);
    this.due.setValue(this.task.due);
  }
}
