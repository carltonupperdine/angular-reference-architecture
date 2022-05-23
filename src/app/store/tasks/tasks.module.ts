import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './task.effects';
import { TaskFacade } from './task.facade';
import { taskReducer } from './task.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  providers: [TaskFacade]
})
export class TasksModule {}
