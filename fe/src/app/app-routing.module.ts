import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursantComponent } from './coursant/coursant.component';
import { CourseComponent } from './course/course.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  { path: 'coursants', component: CoursantComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'lessons', component: LessonComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
