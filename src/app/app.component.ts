import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

declare const window: any;

@Component({
  selector: 'thc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  offSetTop: boolean;
  btnToggle: boolean;

  constructor(public dialog: MatDialog) { }

  openToggle() {
    this.btnToggle = true;
  }

  closeToggle() {
    this.btnToggle = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.offSetTop = true;
    } else {
      this.offSetTop = false;
    }
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '500px',
      height: 'auto',
      // disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterFormComponent, {
      width: '620px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
