import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonitemComponent } from './lessonitem.component';

describe('LessonitemComponent', () => {
  let component: LessonitemComponent;
  let fixture: ComponentFixture<LessonitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
