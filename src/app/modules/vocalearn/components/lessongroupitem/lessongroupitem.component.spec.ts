import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessongroupitemComponent } from './lessongroupitem.component';

describe('LessongroupitemComponent', () => {
  let component: LessongroupitemComponent;
  let fixture: ComponentFixture<LessongroupitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessongroupitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessongroupitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
