import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './components/config/config.component';
import { MaterialCdkModule } from '../material-cdk/material-cdk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    MaterialCdkModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigRoutingModule  ]
})
export class ConfigModule { }
