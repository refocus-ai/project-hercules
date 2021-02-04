import { Component, NgZone } from '@angular/core';

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
  public lottieConfig: Object;
	private anim: any;
	private animationSpeed: number = 1;

	constructor() {
		this.lottieConfig = {
			path: '/assets/success-animation.json',
			renderer: 'canvas',
			autoplay: true,
			loop: true
		};
	}

	handleAnimation(anim: any) {
		this.anim = anim;
	}

	stop() {
		this.anim.stop();
	}

	play() {
		this.anim.play();
	}

	pause() {
		this.anim.pause();
	}

	setSpeed(speed: number) {
		this.animationSpeed = speed;
		this.anim.setSpeed(speed);
	}
  // options: AnimationOptions = {
  //   path: '/assets/success-animation.json',
  // };
 
  // styles: Partial<CSSStyleDeclaration> = {
  //   maxWidth: '500px',
  //   margin: '0 auto',
  // };
  
  // animationCreated(animationItem: AnimationItem): void {
  //   console.log(animationItem);
  // }
  title = 'project-hercules';
}
