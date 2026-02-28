import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create-lesson-dialog',
    templateUrl: './create-lesson-dialog.html',
    styleUrls: ['./create-lesson-dialog.scss']
})
export class CreateLessonDialogComponent {
    content: string = '';

    constructor(private dialogRef: MatDialogRef<CreateLessonDialogComponent>) { }

    confirm(): void {
        if (this.content.trim()) {
            this.dialogRef.close(this.content.trim());
        }
    }

    cancel(): void {
        this.dialogRef.close(null);
    }
}
