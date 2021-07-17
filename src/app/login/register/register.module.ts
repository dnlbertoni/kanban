import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { MaterialCdkModule } from 'src/app/material-cdk/material-cdk.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialCdkModule, 
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
