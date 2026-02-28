import { Component, OnInit } from '@angular/core';
import { Lesson, LessonService } from 'src/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((lessons) => {
      this.lessons = lessons;
    });
  }

}
