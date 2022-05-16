import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  columnsToDisplay = ['complete', 'id', 'title', 'description', 'due'];

  getColour(task: Task): string {
    if (!task.due) return '';

    if (task.complete) return 'completed';

    const overdue = task.due < new Date();
    if (overdue) return 'overdue';

    const ONE_DAY = 1000 * 60 * 60 * 24;
    const daysRemaining =
      Math.floor(task.due.getMilliseconds() - new Date().getMilliseconds()) /
      ONE_DAY;

    if (daysRemaining < 7) {
      return 'due-soon';
    }

    return '';
  }
}
