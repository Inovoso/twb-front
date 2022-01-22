import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];
const FORM_MODULES = [FormsModule, ReactiveFormsModule];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...MATERIAL_MODULES,
    ...FORM_MODULES,
  ],
})
export class AuthModule {}
