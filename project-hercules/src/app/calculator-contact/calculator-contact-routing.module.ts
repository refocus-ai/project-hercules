import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorContactComponent } from './calculator-contact.component';

const routes: Routes = [{ path: '', component: CalculatorContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorContactRoutingModule { }
