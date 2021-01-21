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
  
  public demoArray = ["opt1", "opt2", "opt3", "opt4"];
  public updateFreq: any;

  showFrequencyInput = false;

  constructor() { }

  ngOnInit(): void {
  }

  dropdownChangeOne(val: any) {
    let value = val["target"]["value"];
    if(value==='4') {
      this.showFrequencyInput = true;
    } else {
      this.showFrequencyInput = false
    }
  }

  dropdownChangeTwo(value: any) {
    if(value==='4')
       document.getElementById('location')!.style.display='block';
    else
       document.getElementById('location')!.style.display='none'; 
  }



  toggle() {
    this.next.emit(null)
  }

  

}
