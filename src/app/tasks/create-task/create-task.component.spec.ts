import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../app.module';
import { CreateTaskComponent } from './create-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskService } from '../task.service';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;

  beforeEach(async () => {
    const taskService = new TaskService();

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        CreateTaskComponent,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TaskService, useValue: taskService }
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
