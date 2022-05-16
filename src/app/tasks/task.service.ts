import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from './task.model';

let tasks: Task[] = [
  {
    id: 1,
    title: 'Task #1',
    description: 'My first task',
    complete: false
  },
  {
    id: 2,
    title: 'Task #2',
    description: 'Second Task',
    complete: false,
    due: new Date()
  },
  {
    id: 3,
    title: 'Completed Task',
    description: 'a completed task',
    complete: true
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

  getAll$(): Observable<Task[]> {
    return new Observable((subscriber) => {
      subscriber.next(tasks);
    });
  }
}
