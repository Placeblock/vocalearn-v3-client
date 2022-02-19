import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessongroupComponent } from './lessongroup.component';

describe('LessongroupComponent', () => {
  let component: LessongroupComponent;
  let fixture: ComponentFixture<LessongroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessongroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
