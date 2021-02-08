import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
    public dataPoints:string = '',
    public attributes:string = '',
    public completion:string = '',
    public updateFreq:string = '',
    public dataLocation:string = '',
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
  // when return, code becomes unreachable
  console.log(rounded*40);
}


  dropdownChangeOne(val: any) {
    let value = val["target"]["value"];
    console.log(val.target.value)
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

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      this.form.reset();
    }
    
  }

}