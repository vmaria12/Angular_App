import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lesson, LessonService } from 'src/services/lesson.service';
import { CreateLessonDialogComponent } from './dialogs/create-lesson-dialog';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor(
    private lessonService: LessonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons(): void {
    this.lessonService.getLessons().subscribe((lessons) => {
      this.lessons = lessons;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateLessonDialogComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'fullscreen-dialog',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((content: string | null) => {
      if (content) {
        this.lessonService.createLesson(content).subscribe(() => {
          this.loadLessons(); // reîncarcă lista după creare
        });
      }
    });
  }

}
