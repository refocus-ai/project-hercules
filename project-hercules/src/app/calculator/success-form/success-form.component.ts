import { style } from '@angular/animations';
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
  showLoader = true;

  @Input() dataScore: any;
  @Output() back: EventEmitter <any> = new EventEmitter <any> ();


  constructor() { }

  ngOnInit(): void { }
  

  toggleSuccess() {
    this.back.emit(null)
  }

  toggleLoader() { 
    if (this.dataScore){
      this.showLoader = !this.showLoader;
    } else {
      this.showLoader;
    }
  }

}
