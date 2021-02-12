import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: ` <lottie-animation-view
                    [options]="lottieConfig"
                    [width]="300"
                    [height]="600"
                    (animCreated)="handleAnimation($event)">
              </lottie-animation-view>
              <div id="player">
                <p>Speed: x{{animationSpeed}}</p>
                <div class="range-container">
                  <input #range type="range" value="1" min="0" max="3" step="0.5"
                    (change)="setSpeed(range.value)">
                </div>
                <button (click)="stop()">stop</button>
                <button (click)="pause()">pause</button>
                <button (click)="play()">play</button>
              </div>`,
  // template: `<ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'project-hercules';
}
