import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonmanagerfolderComponent } from './lessonmanagerfolder.component';

describe('LessonmanagerfolderComponent', () => {
  let component: LessonmanagerfolderComponent;
  let fixture: ComponentFixture<LessonmanagerfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonmanagerfolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonmanagerfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
