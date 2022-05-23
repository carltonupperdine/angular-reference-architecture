import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;

  beforeEach(() => {
    component = new TaskFormComponent();
    component.task = {
      title: 'big task',
      description: 'time to procrastinate',
      complete: false
    };

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct form values', () => {
    expect(component.title.value).toBe('big task');
    expect(component.description.value).toBe('time to procrastinate');
    expect(component.due.value).toBeUndefined();
  });
});
