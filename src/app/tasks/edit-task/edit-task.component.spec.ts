import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EditTaskComponent } from './edit-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskFacade } from '../../store/tasks';
import { TaskService } from '../task.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;

  beforeEach(async () => {
    var taskServiceMock = new TaskService();
    taskServiceMock.get = (id: number) => {
      return {
        id: id,
        title: 'Task #1',
        description: 'First Task',
        complete: false
      };
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        EditTaskComponent,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TaskService, useValue: taskServiceMock },
        {
          provide: TaskFacade,
          useValue: jest.mock<TaskFacade>('../../store/tasks')
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: 1 }])
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(EditTaskComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct task', () => {
    component.task$.subscribe((task) => {
      expect(task?.id).toBe(1);
      expect(task?.title).toBe('Task #1');
      expect(task?.description).toBe('First Task');
    });
    // expect(component.task.id).toBe(1);
    // expect(component.task.title).toBe('Task #1');
    // expect(component.task.description).toBe('First Task');
  });
});
