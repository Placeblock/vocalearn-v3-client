import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocalearnComponent } from './vocalearn.component';

const routes: Routes = [{ path: '', component: VocalearnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocalearnRoutingModule { }
