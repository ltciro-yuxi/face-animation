import { Component } from '@angular/core';
import { animationBye, animationFace } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animationBye, animationFace
  ]
})
export class AppComponent {
  url = 'https://api.adorable.io/avatars/9999';
  faceEffect = '' ;
  containerEffect = '';

  changeEffectFace(_effect: string): void {
    this.faceEffect = _effect;
  }

  changeEffectContainer(_effect: string): void {
    this.containerEffect = _effect;
  }

  clearEffect(): void {
    this.faceEffect = '';
  }

}
