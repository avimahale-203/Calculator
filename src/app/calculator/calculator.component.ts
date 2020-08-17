import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl:'./calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

 public num1:number;
 public num3:number;
 public num2:number;
 public result:number;

addd(){
     this.result = this.num1 + this.num2 + this.num3;

}
sub(){
  this.result = this.num1 -this.num2;}

  mul(){
    this.result = this.num1 * this.num2;}

    divi(){
      this.result = (this.num1) /(this.num2);}

      ssq(){
        this.result=this.num1*this.num1;
      }

      mp(){
        this.result = (this.num1) +(this.num2)-(this.num3);}
        pm(){
          this.result = this.num1 - this.num2 + this.num3;}
          omkar(){
            this.result = this.num1 * this.num2 * this.num3;}
         }
