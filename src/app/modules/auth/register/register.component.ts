import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  submitted = false;
  
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    rpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
  });
  
  constructor(private fb: FormBuilder) { }

  toggleShowPassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  onSubmit() {
    this.submitted = true;
  }
}
