import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksModule } from './tasks/tasks.module';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksModule,
    NgRxStoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class StoreModule {}
