import { Component, Input } from '@angular/core';
import { IFriend } from '../../services/friend.interface';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input() friendData: IFriend;
}
