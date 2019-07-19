import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFriend } from './friend.interface';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class VKapiService {
  public REDIRECT_URI = environment.backendURL;
  private _friends: IFriend[];

  constructor(private httpClient: HttpClient) {}

  get friends(): Observable<IFriend[]> {
    if (this._friends) {
      return of(this._friends);
    }

    const vkId = localStorage.getItem('webim-test-vkId');
    const url = `${environment.backendURL}/VKgetfriends/${vkId}`;

    return this.httpClient.get<any[]>(url).pipe(
      map(friends => {
        return friends.map(friend => {
          friend = {
            name: `${friend.first_name} ${friend.last_name}`,
            photo: friend.photo_50,
            online: friend.online,
            id: friend.id
          };

          return friend;
        });
      }),
      tap(friends => { this._friends = friends; })
    );
  }

  logout() {
    const vkId = localStorage.getItem('webim-test-vkId');
    const url = `${environment.backendURL}/VKlogout/${vkId}`;

    localStorage.removeItem('webim-test-vkId');
    this._friends = null;

    return this.httpClient.delete(url);
  }
}
