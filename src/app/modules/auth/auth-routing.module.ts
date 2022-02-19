import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent, data: { animation: 'login' } },
    { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
    { path: 'reset', component: ResetpasswordComponent, data: { animation: 'reset' } },
    { path: '**', redirectTo: "login" }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
