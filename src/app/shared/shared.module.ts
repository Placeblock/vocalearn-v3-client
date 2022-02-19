import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PasswordinputComponent } from './passwordinput/passwordinput.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    PasswordinputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
