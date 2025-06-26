import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBlank } from './nav-bar-blank';

describe('NavBarBlank', () => {
  let component: NavBarBlank;
  let fixture: ComponentFixture<NavBarBlank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarBlank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarBlank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
