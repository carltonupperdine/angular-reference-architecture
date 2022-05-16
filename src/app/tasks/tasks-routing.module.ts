import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'create',
    component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
