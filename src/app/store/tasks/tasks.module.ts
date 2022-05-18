import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskStoreEffects } from './effects';
import { taskReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskStoreEffects])
  ],
  providers: [TaskStoreEffects]
})
export class TasksModule {}
