import { Component } from '@angular/core';
import { Course, CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
