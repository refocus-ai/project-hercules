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
import { DataService } from '../services/data.service';

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
  showSuccessForm = false;

  
  constructor(private _dataService: DataService) { }

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

  setCalculatorData(calculatorData: any) {
    console.log(calculatorData);
  }

  submitDataScore() {
  let score = {
    "checks": [1, 1, 1],
    "dataPoints": 6000,
    "dataAttributes": 30,
    "percComplete": 1,
    "customerEmail": "test",
    "customerName": "test",
    "customerCompany": "Test",
    "dataFrequency": "test",
    "dataLocation": "test",
    "additionalInfo": "test"
  }  
    this._dataService.postDataScore(score).subscribe(response => {
      console.log(response)
    })
  }

  
}