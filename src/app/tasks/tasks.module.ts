import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { TaskFormComponent } from './shared/task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    CreateTaskComponent,
    EditTaskComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class TasksModule {}
