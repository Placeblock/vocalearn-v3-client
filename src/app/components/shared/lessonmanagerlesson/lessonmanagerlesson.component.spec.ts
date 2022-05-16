import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonmanagerlessonComponent } from './lessonmanagerlesson.component';

describe('LessonmanagerlessonComponent', () => {
  let component: LessonmanagerlessonComponent;
  let fixture: ComponentFixture<LessonmanagerlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonmanagerlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonmanagerlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
