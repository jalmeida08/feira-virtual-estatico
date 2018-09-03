import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { routing } from '../app.routes';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
    exports: [],
    providers: [
        LoginService
    ],
})
export class LoginModule { }