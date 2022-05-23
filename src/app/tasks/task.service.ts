import { BehaviorSubject, Observable, filter, map, of } from 'rxjs';
import { Task, TaskModel } from './shared/models';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
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

  private tasks$ = new BehaviorSubject(this.tasks);

  getAll(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  get(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  create(model: TaskModel): Observable<Task> {
    return of({
      ...model,
      id: this.getPrimaryKey(),
      complete: false
    });
  }

  update(task: Task) {
    this.tasks$.subscribe((tasks) => {
      const idx = tasks.findIndex((t) => t.id === task.id);
      tasks[idx] = task;
      this.tasks$.next(tasks);
    });
  }

  complete(id: number): void {
    this.tasks$.subscribe((tasks) => {
      const idx = tasks.findIndex((task) => task.id === id);
      tasks[idx].complete = true;
      this.tasks$.next(tasks);
    });
  }

  private getPrimaryKey(): number {
    const ids = this.tasks.map((t) => t.id);
    return Math.max(...ids) + 1;
  }
}
