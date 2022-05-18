import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { TasksModule } from './tasks/tasks.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    TasksModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
