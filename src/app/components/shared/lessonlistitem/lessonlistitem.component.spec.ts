import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonlistitemComponent } from './lessonlistitem.component';

describe('LessonlistitemComponent', () => {
  let component: LessonlistitemComponent;
  let fixture: ComponentFixture<LessonlistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonlistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
