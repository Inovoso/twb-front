import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ToolbarComponent, FooterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
