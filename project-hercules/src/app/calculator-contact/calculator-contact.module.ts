import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorContactRoutingModule } from './calculator-contact-routing.module';
import { CalculatorContactComponent } from './calculator-contact.component';


@NgModule({
  declarations: [CalculatorContactComponent],
  imports: [
    CommonModule,
    CalculatorContactRoutingModule
  ]
})
export class CalculatorContactModule { }
