import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { routing } from '../app.routes';
import { AlertaModule } from '../_directive/_alert/alerta.module';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
        AlertaModule        
    ],
    exports: [],
    providers: [
        LoginService
    ],
})
export class LoginModule { }