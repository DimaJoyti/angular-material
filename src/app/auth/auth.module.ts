import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [SharedModule],
    declarations: [LoginComponent],
    providers: [AuthService, AuthGuard],
})
export class AuthModule { }
