import { Component } from '@angular/core';
import { faEye, faEyeSlash, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faQuestionCircle = faQuestionCircle;
  isShowingPassword = false;

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  
  constructor(private fb: FormBuilder) { }

  toggleShowPassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  onSubmit() {
  }
}
