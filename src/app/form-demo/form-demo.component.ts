import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Nationality } from "../models/nationality"

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class FormDemoComponent implements OnInit {

  nationality: Nationality[];

  
  constructor() { }

  ngOnInit() {

    this.nationality= [
      {value: 'United Arab Emirates', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ]
  }

}
