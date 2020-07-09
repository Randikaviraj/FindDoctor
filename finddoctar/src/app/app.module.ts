import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FindbynameComponent } from './findbyname/findbyname.component';
import { FindbyhospitalComponent } from './findbyhospital/findbyhospital.component';
import { FindbyspecialityComponent } from './findbyspeciality/findbyspeciality.component';
import { FindbydateComponent } from './findbydate/findbydate.component'

import {UserService} from './user.service';
import { LogedComponent } from './loged/loged.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ForgetpasswordComponent,
    FindbynameComponent,
    FindbyhospitalComponent,
    FindbyspecialityComponent,
    FindbydateComponent,
    LogedComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
