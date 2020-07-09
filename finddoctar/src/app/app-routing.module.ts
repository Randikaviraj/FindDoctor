import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MainComponent} from './main/main.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {FindbynameComponent} from './findbyname/findbyname.component';
import {FindbydateComponent} from './findbydate/findbydate.component';
import {FindbyhospitalComponent} from './findbyhospital/findbyhospital.component';
import{FindbyspecialityComponent}from './findbyspeciality/findbyspeciality.component'
import {LogedComponent} from './loged/loged.component'
const routes: Routes = [
  
  {path:'main',component:MainComponent,pathMatch:'full'},
  {path:'loged',component:LogedComponent,pathMatch:'full'},
  {path:'findbyname',component:FindbynameComponent,pathMatch:'full'},
  {path:'findbydate',component:FindbydateComponent,pathMatch:'full'},
  {path:'findbyhospital',component:FindbyhospitalComponent,pathMatch:'full'},
  {path:'findbyspeciality',component:FindbyspecialityComponent,pathMatch:'full'},
  {path:'about',component:AboutComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'forgetpassward',component:ForgetpasswordComponent,pathMatch:'full'},
  {path:'', redirectTo:'/main',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
