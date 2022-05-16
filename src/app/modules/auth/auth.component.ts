import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { opacityTransition } from './animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
	animations: [opacityTransition]
})
export class AuthComponent {

  faArrowLeft = faArrowLeft;

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
