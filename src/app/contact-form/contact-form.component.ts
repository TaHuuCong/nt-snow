import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'thc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  frContact: FormGroup;
  namePattern = '[a-zA-Z]+';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.frContact = this.fb.group({
      contactName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(this.namePattern)
        ]
      ],
      contactEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contactTitle: ['', Validators.required],
      contactComment: ['', Validators.required]
    });
  }

  get contactName() {
    return this.frContact.get('contactName');
  }

  get contactEmail() {
    return this.frContact.get('contactEmail');
  }

  get contactTitle() {
    return this.frContact.get('contactTitle');
  }

  get contactComment() {
    return this.frContact.get('contactComment');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.frContact);
  }

  sendMessage(): void {
    this.dialog.open(ContactSuccessComponent, {
      width: '400px',
      height: 'auto',
    });
  }

}


@Component({
  selector: 'thc-contact-success',
  template: `<h2>Thank you! Your message has been sent successfully !!!</h2>`,
  styles: ['h2 {color: green; text-align: center; font-size: 20px;}']
})
export class ContactSuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<ContactSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
