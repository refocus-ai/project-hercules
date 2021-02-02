import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() submit: EventEmitter <any> = new EventEmitter <any> ();

  @Output() goBack: EventEmitter <any> = new EventEmitter <any> ();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccess() {
    this.submit.emit(null)
  }

  toggle() {
      this.goBack.emit(null)
  }

}
