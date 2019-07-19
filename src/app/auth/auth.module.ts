import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../shared/app-shared.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'auth', component: AuthComponent}
    ]),

    AppSharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {}
