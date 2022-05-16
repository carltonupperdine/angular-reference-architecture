import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [TasksComponent, TaskListComponent, CreateTaskComponent, EditTaskComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    TasksRoutingModule,
    FormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class TasksModule {}
