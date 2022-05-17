import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditTaskComponent } from './edit-task.component';
import { MaterialModule } from '.././../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskFormComponent } from '../shared/task-form/task-form.component';
import { TaskService } from '../task.service';
import { of } from 'rxjs';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

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
      imports: [
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [EditTaskComponent, TaskFormComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TaskService, useValue: taskServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct task', () => {
    expect(component.task.id).toBe(1);
    expect(component.task.title).toBe('Task #1');
    expect(component.task.description).toBe('First Task');
  });
});
