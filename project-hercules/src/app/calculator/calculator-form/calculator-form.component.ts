import { Component, OnInit } from '@angular/core';
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



  constructor() { }

  ngOnInit(): void {
  }

}
