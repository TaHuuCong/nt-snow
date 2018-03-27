import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'thc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  user = 'thcong';
  pass = '12345';
  hide = true;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
    if (this.loginForm.value.username === this.user && this.loginForm.value.password === this.pass) {
      this.dialogRef.close();
      this.dialog.open(LoginSuccessComponent, {
        width: '400px',
        height: 'auto',
      });
    } else {
      this.submitted = true;
    }
  }

}


@Component({
  selector: 'thc-login-success',
  template: `<h2>Login Successfully !!!</h2>`,
  styles: ['h2 {color: green; text-align: center; font-size: 20px;}']
})
export class LoginSuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
