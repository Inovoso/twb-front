import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}
}
