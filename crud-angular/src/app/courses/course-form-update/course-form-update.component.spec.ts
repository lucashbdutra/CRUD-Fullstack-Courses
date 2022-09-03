import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormUpdateComponent } from './course-form-update.component';

describe('CourseFormUpdateComponent', () => {
  let component: CourseFormUpdateComponent;
  let fixture: ComponentFixture<CourseFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
