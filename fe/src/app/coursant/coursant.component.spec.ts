import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursantComponent } from './coursant.component';

describe('CoursantComponent', () => {
  let component: CoursantComponent;
  let fixture: ComponentFixture<CoursantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursantComponent]
    });
    fixture = TestBed.createComponent(CoursantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
