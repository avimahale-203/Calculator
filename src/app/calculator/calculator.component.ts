import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface CalculatorForm {
  number1: FormControl<number>;
  number2: FormControl<number>;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {

  calculatorForm: FormGroup = new FormGroup<CalculatorForm>({
    number1: new FormControl(null, Validators.required,),
    number2: new FormControl(null, Validators.required),
  })
  public result: number;

  constructor(
  ) { }

  add() {
    this.result = this.calculatorForm.value.number1 + this.calculatorForm.value.number2;
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
