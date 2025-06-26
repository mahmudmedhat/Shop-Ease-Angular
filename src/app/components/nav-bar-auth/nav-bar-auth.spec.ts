import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAuth } from './nav-bar-auth';

describe('NavBarAuth', () => {
  let component: NavBarAuth;
  let fixture: ComponentFixture<NavBarAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
