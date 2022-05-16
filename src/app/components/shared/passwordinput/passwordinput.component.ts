import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faEye, faEyeSlash, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'password-input',
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordinputComponent),
      multi: true
    }
  ]
})
export class PasswordinputComponent implements ControlValueAccessor{
  @Input() passwordValue = "";
  propagateChange = (_: any) => {};
  isShowingPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faQuestionCircle = faQuestionCircle;

  writeValue(value: any): void {
    if (value !== undefined) {
      this.passwordValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  toggleShowPassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }
  changeValue(event: any) {
    this.passwordValue = event.target.value;
    this.propagateChange(event);
  }
}
