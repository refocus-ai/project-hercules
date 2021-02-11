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

  @Output() f: EventEmitter <any> = new EventEmitter <any> ();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccess() {
    this.submit.emit(null)
  }

  toggle() {
      this.goBack.emit(null)
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");``
      console.log(this.form.value);
    }
    
  }

}
