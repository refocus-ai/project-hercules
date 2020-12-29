import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorContactComponent } from './calculator-contact.component';

describe('CalculatorContactComponent', () => {
  let component: CalculatorContactComponent;
  let fixture: ComponentFixture<CalculatorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
