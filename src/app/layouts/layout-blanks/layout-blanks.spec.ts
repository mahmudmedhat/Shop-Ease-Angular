import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBlanks } from './layout-blanks';

describe('LayoutBlanks', () => {
  let component: LayoutBlanks;
  let fixture: ComponentFixture<LayoutBlanks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBlanks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBlanks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
