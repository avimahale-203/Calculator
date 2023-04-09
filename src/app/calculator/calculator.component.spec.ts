import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.calculatorForm = new FormGroup({
      number1: new FormControl(6),
      number2: new FormControl(2),
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the two numbers', () => {
    component.add();
    expect(component.result).toEqual(8);
  })

  it('should substract the second number from the first number', () => {
    component.sub();
    expect(component.result).toEqual(4);
  })
  it('should multiply the two numbers', () => {
    component.mul();
    expect(component.result).toEqual(12);
  })

  it('should devide the first number with the second number', () => {
    component.div();
    expect(component.result).toEqual(3);
  })
});
