import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonmanagerComponent } from './lessonmanager.component';

describe('LessonmanagerComponent', () => {
  let component: LessonmanagerComponent;
  let fixture: ComponentFixture<LessonmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
