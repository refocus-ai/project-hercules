import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ 
  path: '', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule) }, { 
  path: 'calculator-contact', loadChildren: () => import('./calculator-contact/calculator-contact.module').then(m => m.CalculatorContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
