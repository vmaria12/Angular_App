import { Injectable } from '@angular/core';
import { Lesson } from './lesson.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseURL = 'http://localhost:8080/course/all';

  constructor(private http: HttpClient) {
    this.getCourses();
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseURL);
  }
}
