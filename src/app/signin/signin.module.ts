import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    SignupComponent,
    CreateAccountComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
