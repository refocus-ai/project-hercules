import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.scss']
})
export class SuccessFormComponent implements OnInit, OnChanges {
  faCoffee = faCoffee;
  faCheckSquare = faCheckSquare;
  showLoader = true;
  showSuccess = false;

  @Input() dataScore: any;
  @Output() back: EventEmitter <any> = new EventEmitter <any> ();


  constructor() { }

  ngOnInit(): void { }
  
ngOnChanges(changes: SimpleChanges) {
  this.toggleLoader();
}

  toggleSuccess() {
    this.back.emit(null)
  }

  toggleLoader() { 
    if (this.dataScore){
      this.showLoader = !this.showLoader;
      this.showSuccess;
    } else {
      this.showLoader;
    }
  }

}
