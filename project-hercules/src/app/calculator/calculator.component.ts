import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  // ...
} from '@angular/animations';
import { yellow } from '@scullyio/scully';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  animations: [
    trigger(
      "fadeInAnimation", [
          transition(":enter", [
              style({ opacity: 0, transform: 'translateY(-100%)' }),
              animate("1500ms ease-in", style({ opacity: 1, transform: "translateY(0)" }))
          ]), 
          
      ],
  ),
    // trigger('slideInOut', [
    //   transition(':enter', [
    //     style({transform: 'translateY(-100%)'}),
    //     animate('1800ms ease-in', style({transform: 'translateY(0%)'}))
    //   ]),
    //   transition(':leave', [
    //     animate('1800ms ease-in', style({transform: 'translateY(-100%)'}))
    //   ])
    // ])
  ]
  
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