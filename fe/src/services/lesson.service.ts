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
  private baseURL = 'http://localhost:8080/lesson';

  constructor(private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.baseURL}/all`);
  }

  createLesson(content: string): Observable<Lesson> {
    return this.http.post<Lesson>(`${this.baseURL}/create`, { content });
  }
}
