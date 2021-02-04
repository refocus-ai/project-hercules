import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactFormComponent } from './calculator/contact-form/contact-form.component';
import { CalculatorFormComponent } from './calculator/calculator-form/calculator-form.component';
import { SuccessFormComponent} from './calculator/success-form/success-form.component';
import { HeaderComponent } from './calculator/header/header.component';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { LottieAnimationViewModule } from 'ng-lottie';
import player from 'lottie-web';
import { HttpClientModule } from '@angular/common/http';
 
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ContactFormComponent,
    CalculatorFormComponent,
    SuccessFormComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    FormsModule,
    [LottieModule.forRoot({ player: playerFactory })],
    LottieAnimationViewModule.forRoot(),
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

