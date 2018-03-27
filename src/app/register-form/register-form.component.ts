import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


// Validate: không cho phép user đăng ký các username như 'admin', 'manager'...
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}

// Validate: không có khoảng trắng ở giữa username, có thể có ở đầu và cuối
export function nospaceValidator(c: AbstractControl) {
  const re = / /;
  if (c.value && c.value.trim().match(re)) {
    return { nospace: true };
  }
}

// Validate: so sánh confirmPassword và password --> khi có error thì là error của pw
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'thc-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,13}$';


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          forbiddenUsername(['admin', 'ADMIN', 'manager', 'MANAGER', 'Admin', 'Manager']),
          nospaceValidator,
        ]
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      pw: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
        confirmPassword: ['', Validators.required]
      }, {
          validator: comparePassword
        })
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('pw.password');
  }

  get confirmPassword() {
    return this.registerForm.get('pw.confirmPassword');
  }

  register() {
    if (this.registerForm.valid) {
      this.dialogRef.close();
      this.dialog.open(RegisterSuccessComponent, {
        width: '400px',
        height: 'auto',
      });
    }
  }
}


@Component({
  selector: 'thc-register-success',
  template: `<h2>Register Successfully !!!</h2>`,
  styles: ['h2 {color: green; text-align: center; font-size: 20px;}']
})
export class RegisterSuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
