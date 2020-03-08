import { HttpClient } from '@angular/common/http';
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
  websiteId = 1;
  LanguageID= 2; 
  feedbackType= 1;

  constructor(private formBuilder: FormBuilder, private user:User , private HttpClient:HttpClient) { }
  
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

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.userForm.valid) {
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.userForm.value);
  //   }
  // }
  
  submitFeedback() { 
    this.submitted = true;
    if (this.userForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.userForm.value);
    } 
    this.HttpClient.get("http://demoserver.tacme.net:3030/MOICDTacsoft/services/FeedbackRestService.svc/SubmitFeedback?"
      +"WebsiteID=this.websiteId&LanguageID=this.LanguageID&Name=this.userForm.controls['firstNmae'].value&Email=this.userForm.controls['email'].value&PhoneNumber=this.userForm.controls['phone'].value&Age=this.userForm.controls['age'].value&Organization=this.userForm.controls['Organization'].value"+
      "Nationality=this.userForm.controls['Nationality'].value&Residency=this.userForm.controls['placeofResidency'].value&Subject=this.userForm.controls['subject'].value&message=this.userForm.controls['message'].value&feedbackType=this.feedbackType" ).subscribe(
       (res: any) => {
         console.log(res);
       },
       err => {
         console.log(err);
       })
 }

}
