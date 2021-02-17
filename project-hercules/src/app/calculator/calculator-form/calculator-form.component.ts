import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ValueTransformer } from '@angular/compiler/src/util';
import { checkFolderExists } from '@scullyio/scully/src/lib/utils';

class dataEntry {
  constructor(
    public checkboxBinary:any = '',
    public checkboxNumerical:any = '',
    public checkboxDates:any = '',
    public dataPoints:any = '',
    public attributes:any = '',
    public completion:any = '',
    public updateFreq:any = '',
    public dataLocation:any = '',
  ) {

  }
}

@Component({
  
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  animations: [

  ]
})


export class CalculatorFormComponent implements OnInit {
  
  model: dataEntry = new dataEntry();
  @ViewChild('f') form: any;

  @Output() next: EventEmitter <any> = new EventEmitter <any> ();

  @Output() calculatorFormDataOutput: EventEmitter <any> = new EventEmitter <any> ();
  
  @Output() submitCalcScore: EventEmitter <any> = new EventEmitter <any> ();

  public freqArray = ["Once a week", "Biweekly", "Once a month", "Other"];
  public updateFreq: any;

  public locationArray = ["Database", "Google Sheets", "Microsoft Excel Spreadsheet", "Other"];
  public dataLocation: any;


  showFrequencyInput = false;
  showLocationInput = false;

  constructor() { }

  ngOnInit(): void {
  }

 valueChanged(e: number) {
  const rounded = Math.round(e)/100;
  console.log(rounded*40);
}


  dropdownChangeOne(val: any) {
    let value = val["target"]["value"];
    if(value==="Other") {
      this.showFrequencyInput = true;
    } else {
      this.showFrequencyInput = false
    }
  }

  dropdownChangeTwo(val: any) {
    let value = val["target"]["value"];
    if(value==="Other"){
      this.showLocationInput = true;
    } else {
      this.showLocationInput = false
    }
}

  toggle() {
    this.next.emit(null)
  }

  submitDataScore() {
    this.submitCalcScore.emit("")
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      this.calculatorFormDataOutput.emit(this.form.value)
    }
    
  }

}