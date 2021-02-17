import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

class Signup {
  constructor(
    public fullName:string = '',
    public company:string = '',
    public email:string = '',
    public questions:string = '',
  ) {

  }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  model: Signup = new Signup();
  @ViewChild('f') form: any;

  @Output() submit: EventEmitter <any> = new EventEmitter <any> ();

  @Output() goBack: EventEmitter <any> = new EventEmitter <any> ();

  @Output() contactFormDataOutput: EventEmitter <any> = new EventEmitter <any> ();

  @Output() submitContactScore: EventEmitter <any> = new EventEmitter <any> ();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccess() {
    this.submit.emit(null)
  }

  toggle() {
      this.goBack.emit(null)
  }

  submitDataScore() {
    this.submitContactScore.emit("")
  }
  
  
  onSubmit() {
    if (this.form.valid) {
      this.contactFormDataOutput.emit(this.form.value)
      console.log("Form Submitted!");
    }

  
  }

}
