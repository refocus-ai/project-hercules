import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  animations: [
    trigger(
      "fadeInAnimation", [
          transition(":enter", [
              style({ opacity: 0, transform: "translateY(1%)" }),
              animate("1500ms", style({ opacity: 1, transform: "translateY(0)" }))
          ]),
      ],
  )
  ]
})


export class CalculatorFormComponent implements OnInit {

  @Output() next: EventEmitter <any> = new EventEmitter <any> ();
  
  public freqArray = ["Once a week", "Biweekly", "Once a month", "other"];
  public updateFreq: any;

  public locationArray = ["Database", "Google Sheets", "Microsoft Excel Spreadsheet", "other"];
  public dataLocation: any;



  showFrequencyInput = false;
  showLocationInput = false;

  constructor() { }

  ngOnInit(): void {
  }

  dropdownChangeOne(val: any) {
    let value = val["target"]["value"];
    console.log(val.target.value)
    if(value==="other") {
      this.showFrequencyInput = true;
    } else {
      this.showFrequencyInput = false
    }
  }

  dropdownChangeTwo(val: any) {
    let value = val["target"]["value"];
    if(value==="other"){
      this.showLocationInput = true;
    } else {
      this.showLocationInput = false
    }
}



  toggle() {
    this.next.emit(null)
  }

  

}
