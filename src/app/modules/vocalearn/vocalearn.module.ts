import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocalearnRoutingModule } from './vocalearn-routing.module';
import { VocalearnComponent } from './vocalearn.component';
import { LessonlistComponent } from './components/lessonlist/lessonlist.component';
import { LessongroupComponent } from './components/lessongroup/lessongroup.component';
import { LessonitemComponent } from './components/lessonitem/lessonitem.component';
import { LessongroupitemComponent } from './components/lessongroupitem/lessongroupitem.component';


@NgModule({
  declarations: [
    VocalearnComponent,
    LessonlistComponent,
    LessongroupComponent,
    LessonitemComponent,
    LessongroupitemComponent
  ],
  imports: [
    CommonModule,
    VocalearnRoutingModule
  ]
})
export class VocalearnModule { }
