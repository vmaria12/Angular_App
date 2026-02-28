import { Injectable } from '@angular/core';
import { Course } from './course.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Coursant {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  coursesList: Course[];
}
@Injectable({
  providedIn: 'root'
})
export class CoursantService {

  private coursantURL = 'http://localhost:8080/coursant/all';

  constructor(private http: HttpClient) {
    this.getCoursants();
  }

  getCoursants(): Observable<Coursant[]> {
    return this.http.get<Coursant[]>(this.coursantURL);
  }
}
