import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskModel, WritableTask } from '../models';

import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() action: string = 'Create';
  @Input() task: WritableTask | undefined;
  @Output() submitted = new EventEmitter<WritableTask>();

  title = new FormControl('');
  description = new FormControl('');
  due = new FormControl();

  submit() {
    this.submitted.emit({
      title: this.title.value,
      description: this.description.value,
      due: this.due.value
    } as TaskModel);
  }

  ngOnInit(): void {
    if (!this.task) return;
    this.title.setValue(this.task.title);
    this.description.setValue(this.task.description);
    this.due.setValue(this.task.due);
  }
}
