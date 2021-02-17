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
  ]
  
})

export class CalculatorComponent implements OnInit {

  showCalculatorForm =  true;
  showContactForm = false;
  showSuccessForm = false;
  score =  { 
    "checks": [] as number[],
    "dataPoints": null as any,
    "dataAttributes": null as any,
    "percComplete": null as any,
    "customerEmail": null as any,
    "customerName": null as any,
    "customerCompany": null as any,
    "dataFrequency": null as any,
    "dataLocation": null as any,
    "additionalInfo": null as any
  }
  // final score var ... can put as input in child comp

  
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
    this.score.checks.push(calculatorData.checkboxBinary === "" ? 0 : 1);
    this.score.checks.push(calculatorData.checkboxNumerical === "" ? 0 : 1);
    this.score.checks.push(calculatorData.checkboxDates === "" ? 0 : 1);
    this.score.dataPoints = calculatorData.dataPoints;
    this.score.dataAttributes = calculatorData.attributes;
    this.score.percComplete = calculatorData.completion;
    this.score.dataFrequency = calculatorData.updateFreq;     
    this.score.additionalInfo = calculatorData.dataLocation;        
  }
  setContactData(contactData: any) {
    console.log(contactData);
    this.score.customerEmail = contactData.email;        
    this.score.customerName = contactData.fullName;        
    this.score.customerCompany = contactData.company;        
    this.score.dataLocation = contactData.questions;        
}  
  

  submitDataScore(dataScore: any) {
    console.log(dataScore);
    let score = {
  }

    this._dataService.postDataScore(this.score).subscribe(response => {
   
      console.log(this.score)
    })
  }

  
}