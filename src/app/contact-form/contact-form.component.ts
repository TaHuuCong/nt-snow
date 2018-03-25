import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
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

}
