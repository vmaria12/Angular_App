import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Lesson {
  id: number;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private lessonURL = 'http://localhost:8080/lesson/all';

  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonURL);
  }
}
