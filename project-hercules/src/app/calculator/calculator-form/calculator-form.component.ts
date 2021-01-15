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

  constructor() { }

  ngOnInit(): void {
  }

  dropdownChangeOne(value: any) {
    if(value==='4')
       document.getElementById('frequency')!.style.display='block';
    else
       document.getElementById('frequency')!.style.display='none'; 
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
