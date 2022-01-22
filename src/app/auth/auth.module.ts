import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatToolbarModule];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ...MATERIAL_MODULES],
})
export class AuthModule {}
