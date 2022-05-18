import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './effects';
import { TaskFacade } from './facade';
import { taskReducer } from './reducer';

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
