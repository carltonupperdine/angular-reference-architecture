import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './task.model';

let tasks: Task[] = [
  {
    id: 1,
    title: 'Task #1',
    description: 'My first task',
    complete: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  selectedTask$: Subject<Task> = new Subject<Task>();

  getAll(): Task[] {
    return tasks;
  }
}
