import { Component} from '@angular/core';
import { faEye, faEyeSlash, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faQuestionCircle = faQuestionCircle;
  isShowingPassword = false;

  toggleShowPassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }
}
