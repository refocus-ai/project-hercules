import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactFormComponent } from './calculator/contact-form/contact-form.component';
import { CalculatorFormComponent } from './calculator/calculator-form/calculator-form.component';
import { HeaderComponent } from './calculator/header/header.component';
import { FooterComponent } from './calculator/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ContactFormComponent,
    CalculatorFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
