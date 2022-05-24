import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { TaskFacade } from '../store/tasks/task.facade';
import { TasksComponent } from './tasks.component';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('TasksComponent', () => {
  let component: TasksComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TasksComponent],
      providers: [provideMockStore(), TaskFacade, MockStore, TasksComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(TasksComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
