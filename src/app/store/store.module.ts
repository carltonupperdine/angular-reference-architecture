import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { TasksModule } from './tasks/tasks.module';

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
