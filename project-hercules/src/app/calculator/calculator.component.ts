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
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-calculator',
  template: `<ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>`,
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

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  showCalculatorForm =  true;
  showContactForm = false;
  showSuccessForm = false;

  
  constructor() { }

  ngOnInit(): void {
  
  }

  toggle() { 
    this.showCalculatorForm = !this.showCalculatorForm; 
    this.showContactForm = !this.showContactForm;   
  }
  toggleSuccess() { 
    this.showContactForm = !this.showContactForm; 
    this.showSuccessForm = !this.showSuccessForm;   
  }


  
}