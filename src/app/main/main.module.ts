import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
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
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
