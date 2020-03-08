import { User } from './../user';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class FormDemoComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:User) { }
  
  ngOnInit() {

    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [Validators.required]],
      'lastName': [this.user.lastName, [Validators.required]],
      'email': [this.user.email, [Validators.required, Validators.email]],
      'age': [this.user.age, [Validators.required]],
      'phone':[this.user.phone, [Validators.required]],
      'Nationality': [this.user.Nationality, [Validators.required]],
      'placeofResidency': [this.user.placeofResidency, [Validators.required]],
      'Organization':[this.user.Organization, [Validators.required]],
      'job':[this.user.job, [Validators.required]],
      'type':[this.user.type, [Validators.required]],
      'subject':[this.user.subject, [Validators.maxLength(20)]],
      'message':[this.user.message, [Validators.maxLength(45)]]
    });
    
  }
  get registerFormControl() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.userForm.value);
    }
  }
  

}
