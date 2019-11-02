import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  displayDec: boolean;
  myForm: FormGroup;

  public constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.myForm = this.fb.group({
      binText: ['', [Validators.required, Validators.pattern('^[0-1]*$')]]
    });
  }

  public get binText() {
    return this.myForm.get('binText').value;
  }

  public convertToDec() {
    console.log(this.myForm.get('binText').value);
    this.displayDec = true;
  }
}
