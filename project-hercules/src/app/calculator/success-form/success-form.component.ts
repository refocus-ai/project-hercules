import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.scss']
})
export class SuccessFormComponent implements OnInit {
  faCoffee = faCoffee;
  faCheckSquare = faCheckSquare;

  @Input() dataScore: any;
  @Output() back: EventEmitter <any> = new EventEmitter <any> ();


  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccess() {
    this.back.emit(null)
}
}
