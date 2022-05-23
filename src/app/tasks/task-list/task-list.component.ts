import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DateUtility } from '../shared/date-utility';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from '../shared/models';
import { TaskDueDateColors } from '../constants';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCompleted = new EventEmitter<number>();

  columnsToDisplay = ['complete', 'id', 'title', 'description', 'due'];

  constructor(private dateUtility: DateUtility) {}

  changed(event: MatCheckboxChange, task: Task) {
    this.taskCompleted.emit(task.id);
  }

  getColour(task: Task): TaskDueDateColors {
    if (task.due) {
      const daysRemaining = this.dateUtility.getDaysRemaining(task.due);

      if (task.complete) {
        return 'completed';
      }

      if (daysRemaining <= 0) {
        return 'overdue';
      }

      if (daysRemaining <= 7) {
        return 'due-soon';
      }

      return 'not-due';
    }

    return '';
  }
}
