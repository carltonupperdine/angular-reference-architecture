import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TasksComponent, TaskListComponent],
  imports: [CommonModule, MatTableModule, MatCheckboxModule, TasksRoutingModule]
})
export class TasksModule {}
