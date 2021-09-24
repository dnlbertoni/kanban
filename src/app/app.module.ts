import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login/login.module';
import { RegisterModule } from './login/register/register.module';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './login/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    BoardModule,
    HomeModule,
    LoginModule,  
    RegisterModule 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
