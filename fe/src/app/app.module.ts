import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursantComponent } from './coursant/coursant.component';
import { CourseComponent } from './course/course.component';
import { LessonComponent } from './lesson/lesson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursantComponent,
    CourseComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
