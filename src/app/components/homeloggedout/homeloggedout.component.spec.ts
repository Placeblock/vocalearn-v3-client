import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoggedOutComponent } from './homeloggedout.component';

describe('HomeComponent', () => {
  let component: HomeLoggedOutComponent;
  let fixture: ComponentFixture<HomeLoggedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoggedOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
