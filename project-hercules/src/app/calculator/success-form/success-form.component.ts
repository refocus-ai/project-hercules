import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.scss']
})
export class SuccessFormComponent implements OnInit {

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  
  @Output() back: EventEmitter <any> = new EventEmitter <any> ();


  constructor() { }

  ngOnInit(): void {
  }

  toggleSuccess() {
    this.back.emit(null)
}
}
