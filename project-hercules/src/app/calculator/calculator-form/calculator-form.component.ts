import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  animations: [
    trigger(
      "fadeInAnimation", [
          transition(":enter", [
            // maybe need to change enter alias to be something else? ... animation play when elemant is brought into DOM not on page load
              style({ opacity: 0, transform: "translateY(1%)" }),
              animate("1500ms", style({ opacity: 1, transform: "translateY(0)" }))
          ]),
      ],
  )
  ]
})


export class CalculatorFormComponent implements OnInit {

  @Output() next: EventEmitter <any> = new EventEmitter <any> ();
  
  public freqArray = ["Once a week", "Biweekly", "Once a month", "Other"];
  public updateFreq: any;

  public locationArray = ["Database", "Google Sheets", "Microsoft Excel Spreadsheet", "Other"];
  public dataLocation: any;

  public saveUsername: any;
  public saveUsernameTwo: any;
  public saveUsernameThree: any;

  public onSaveUsernameChanged(value: any){
    this.saveUsername = value;
     if(value && this.checkSum < 20) {
       this.checkSum += 20;
     } else if (value && this.checkSum >= 20) {
       this.checkSum += 5;
     } else if (!value && this.checkSum <= 20) {
      this.checkSum -= 20;
     } else if (!value && this.checkSum >= 20) {
      this.checkSum -= 5;
     }
     console.log(this.checkSum)
 }

 public onSaveUsernameTwoChanged(value: any){
  this.saveUsernameTwo = value;
   if(value && this.checkSum < 20) {
     this.checkSum += 20;
   } else if (value && this.checkSum >= 20) {
     this.checkSum += 5;
   } else if (!value && this.checkSum <= 20) {
    this.checkSum -= 20;
   } else if (!value && this.checkSum >= 20) {
    this.checkSum -= 5;
   }
   console.log(this.checkSum)
}

public onSaveUsernameThreeChanged(value: any){
  this.saveUsernameThree = value;
   if(value && this.checkSum < 20) {
     this.checkSum += 20;
   } else if (value && this.checkSum >= 20) {
     this.checkSum += 5;
   } else if (!value && this.checkSum <= 20) {
    this.checkSum -= 20;
   } else if (!value && this.checkSum >= 20) {
    this.checkSum -= 5;
   }
   console.log(this.checkSum)
}

  showFrequencyInput = false;
  showLocationInput = false;
  dataPointsSum = 0;
  attributesSum = 0;
  checkSum =  0;

  
  constructor() { }

  ngOnInit(): void {
  }

 changeDataPoints(event: { target: { value: any; }; }) {
  if(event.target.value) {
    this.dataPointsSum += parseInt(event.target.value);
  }
  {console.log(this.dataPointsSum);}
 } 

 changeAttributes(event: { target: { value: any; }; }) {
  if(event.target.value) {
    this.attributesSum += parseInt(event.target.value);
  }
  {console.log(this.attributesSum);}
 } 

 valueChanged(e: any) {
  console.log(e);
}


  dropdownChangeOne(val: any) {
    let value = val["target"]["value"];
    console.log(val.target.value)
    if(value==="Other ") {
      this.showFrequencyInput = true;
    } else {
      this.showFrequencyInput = false
    }
  }

  dropdownChangeTwo(val: any) {
    let value = val["target"]["value"];
    if(value==="Other "){
      this.showLocationInput = true;
    } else {
      this.showLocationInput = false
    }
}




  toggle() {
    this.next.emit(null)
  }

  

}


// Use ngModel for 2 way binding on the checks
// Math.log10() -- built in funtion
// app.filter("round")?? or Math.floor??
// Math.max? for max values
// variable for each category to that we can sum all four up at the end
// each category should have a max value to that you scale down or up to ... all taken care of by rounding down to 1 and then multiplying by 20 or 10 or whatever it may be 


// Data score has a max value of 100; the higher the score the better
// Dtypes (30 pts), # data pts (20 pts), # attributes (10 pts), and completion (40 pts)

// Here are the calculations for each category:
  //  Data Type
  // 20 points for one data type selected
  // 25 points for two data types selected
  // 30 points for all three data points selected
  // If the binary data type option is not selected, deduct 10 points from the total score
  
  // Number of Data Points
    // Take the log, base 10, of the number of data points
    // Divide it by 4
    // Value from the above two can be no greater than 1. If greater, round down to 1
    // Multiply by 20

  // Number of Attributes
    // Divide the number of attributes by 30
    // Value of the division can be no greater than 1. If greater, round down to 1
    // Multiply by 10

  // Percentage of Data Complete
    // Multiply the percentage by 40 (percentage should be in decimal form; ie - 97% = 0.97)
  
  
  // Finally, add all 4 of these individual scores together. js function that returns 
  // a numerical value for the data score
