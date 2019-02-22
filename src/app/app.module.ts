import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { ResultPageComponent } from './result-page/result-page.component';
import { UserInfoService } from './userinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
