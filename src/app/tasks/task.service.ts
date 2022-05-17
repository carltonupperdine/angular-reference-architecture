import { CreateTaskModel } from './create-task/create-task-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

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

  getAll(): Task[] {
    return this.tasks;
  }

  get(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  create(model: CreateTaskModel): Observable<boolean> {
    const task: Task = {
      id: this.getPrimaryKey(),
      title: model.title,
      description: model.description,
      due: model.due,
      complete: false
    };
    this.tasks = [...this.tasks, task];
    return new Observable((subscriber) => {
      return subscriber.next(true);
    });
  }

  update(task: Task) {
    const idx = this.tasks.findIndex((t) => t.id === task.id);

    if (idx >= 0) {
      this.tasks[idx] = task;
    }
  }

  saveChanges(tasks: Task[]) {
    this.tasks = tasks;
  }

  private getPrimaryKey(): number {
    const ids = this.tasks.map((t) => t.id);
    return Math.max(...ids) + 1;
  }
}
