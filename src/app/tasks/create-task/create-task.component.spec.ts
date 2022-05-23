import { APP_BASE_HREF } from '@angular/common';
import { CreateTaskComponent } from './create-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskFacade } from '../../store/tasks';
import { TestBed } from '@angular/core/testing';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        CreateTaskComponent,
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: TaskFacade,
          useValue: jest.mock<TaskFacade>('../../store/tasks')
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(CreateTaskComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
