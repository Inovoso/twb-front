import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.mainForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  testClick() {
    console.log('testClick');

    this.authService
      .signIn(this.mainForm.value.username, this.mainForm.value.password)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
