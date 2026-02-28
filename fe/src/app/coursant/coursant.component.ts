import { Component } from '@angular/core';
import { Coursant, CoursantService } from 'src/services/coursant.service';

@Component({
  selector: 'app-coursant',
  templateUrl: './coursant.component.html',
  styleUrls: ['./coursant.component.scss']
})
export class CoursantComponent {
  coursants: Coursant[] = [];

  constructor(private coursantService: CoursantService) {
    this.coursantService.getCoursants().subscribe((coursants) => {
      this.coursants = coursants;
    });
  }
}
