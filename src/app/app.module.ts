import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';

import { VKapiService } from './services/vkapi.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'auth', pathMatch: 'full'}
    ]),

    AuthModule,
    MainModule
  ],
  providers: [VKapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
