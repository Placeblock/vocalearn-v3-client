import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { opacityTransition } from './animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
	animations: [opacityTransition]
})
export class AuthComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
