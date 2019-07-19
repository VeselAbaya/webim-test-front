import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../shared/app-shared.module';

import { MainComponent } from './main.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    MainComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'main', component: MainComponent}
    ]),

    AppSharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
