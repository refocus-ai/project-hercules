import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { yellow } from '@scullyio/scully';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  
})

export class CalculatorComponent implements OnInit {

  showCalculatorForm =  true;
  showContactForm = false;

  
  constructor() { }

  ngOnInit(): void {
  
  }

  toggle() { 
    this.showCalculatorForm = !this.showCalculatorForm; 
    this.showContactForm = !this.showContactForm; 

}


  
}