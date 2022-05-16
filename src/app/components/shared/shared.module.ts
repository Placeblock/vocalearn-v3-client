import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PasswordinputComponent } from './passwordinput/passwordinput.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LessonmanagerComponent } from './lessonmanager/lessonmanager.component';
import { LessonmanagerlessonComponent } from './lessonmanagerlesson/lessonmanagerlesson.component';
import { LessonmanagerfolderComponent } from './lessonmanagerfolder/lessonmanagerfolder.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { LessonlistitemComponent } from './lessonlistitem/lessonlistitem.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    ButtonComponent,
    PasswordinputComponent,
    LessonmanagerComponent,
    LessonmanagerlessonComponent,
    LessonmanagerfolderComponent,
    LessonlistComponent,
    LessonlistitemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ButtonComponent,
    PasswordinputComponent,
    LessonmanagerComponent,
    LessonlistComponent,
    LessonlistitemComponent,
    MatTabsModule
  ]
})
export class SharedModule { }
