import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';


import { AppComponent } from './app.component';
import { LoginFormComponent, LoginSuccessComponent } from './login-form/login-form.component';
import { RegisterFormComponent, RegisterSuccessComponent } from './register-form/register-form.component';
import { ContactFormComponent, ContactSuccessComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginSuccessComponent,
    RegisterFormComponent,
    RegisterSuccessComponent,
    ContactFormComponent,
    ContactSuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    Ng2PageScrollModule
  ],
  entryComponents: [LoginFormComponent, RegisterFormComponent, LoginSuccessComponent, RegisterSuccessComponent, ContactSuccessComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
