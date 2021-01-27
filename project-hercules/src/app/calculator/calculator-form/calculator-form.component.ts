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
import { checkFolderExists } from '@scullyio/scully/src/lib/utils';


@Component({
  
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  animations: [

  ]
})


export class CalculatorFormComponent implements OnInit {

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

//  changeDataPoints(event: { target: { value: any; }; }) {
//    const dataInput = this.dataPointsSum += parseFloat(event.target.value);
//    const divideDataInput = (Math.log10(dataInput))/4;
//    const roundDataInput = (Math.round(divideDataInput)) *10;
//    console.log(roundDataInput)
//  } 


//     const attrInput = this.attributesSum += parseFloat(event.target.value);
//     const divideAttrInput = (Math.floor(attrInput)/30) *10;
//     console.log(divideAttrInput)
//  } 
// 

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
}
  
// categories = {
//   'checks': [1, 1, 1],
//   'dataPoints': 6000,
//   'dataAttributes': 30,
//   'percComplete': 1
// }



// function funcName(categories) {
//   let total = 0;
//   let totalChecks = categories.checks.reduce((count, val) => (val === 1 ? count + 1 : count), 0);
//   let checkScore = 0;
//   switch (totalChecks) {
//     case 1:
//       checkScore = 20;
//       break;
//     case 2:
//       checkScore = 25;
//       break;
//     case 3:
//       checkScore = 30;
//       break;
//   }
//   // No binary
//   if (categories.checks[0] === 0 && checkScore > 0) {
//     checkScore -= 10;
//   }
//   total += checkScore;

//   let pointsScore = ((Math.log10(categories.dataPoints)) / 4);
//   let points = (pointsScore > 1 ? 1 : pointsScore) * 20;
//   /* if score is over one, round down */
//   total += points;

//   let attrScore = (categories.dataAttributes / 30);
//   let attrs = (attrScore > 1 ? 1 : attrScore) * 10;
//   /* if score is over one, round down */
//   total += attrs;

//   let percScore = categories.percComplete * 40;


//   total += percScore;

//   return total;
// }
// console.log(funcName(categories));
