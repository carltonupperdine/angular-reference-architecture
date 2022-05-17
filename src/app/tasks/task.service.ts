import { BehaviorSubject, Observable } from 'rxjs';
import { CreateTaskModel } from './create-task/create-task-model';
import { Injectable } from '@angular/core';
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

  private tasks$ = new BehaviorSubject(this.tasks);

  getAll$(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  get(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  create(model: CreateTaskModel) {
    const task: Task = {
      id: this.getPrimaryKey(),
      title: model.title,
      description: model.description,
      due: model.due,
      complete: false
    };
    this.tasks$.next([...this.tasks, task]);
  }

  update(task: Task) {
    this.tasks$.subscribe((tasks) => {
      const idx = tasks.findIndex((t) => t.id === task.id);
      tasks[idx] = task;
      this.tasks$.next(tasks);
    });
  }

  complete(id: number) {
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
