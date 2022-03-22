import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  calculatorForm: FormGroup = this.fb.group({
    number1:['', Validators.required],
    number2:['', Validators.required],
  })
  public result: number;

  constructor(
    private fb: FormBuilder,
  ){}

  add() {
    this.result = this.calculatorForm.value.number1 + this.calculatorForm.value.number2

  }
  sub() {
    this.result = this.calculatorForm.value.number1 - this.calculatorForm.value.number2
  }

  mul() {
    this.result = this.calculatorForm.value.number1 * this.calculatorForm.value.number2
  }

  div() {
    this.result = (this.calculatorForm.value.number1) / this.calculatorForm.value.number2;
  }
}
