import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocalearnComponent } from './vocalearn.component';

describe('VocalearnComponent', () => {
  let component: VocalearnComponent;
  let fixture: ComponentFixture<VocalearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocalearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocalearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
