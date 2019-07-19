import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IFriend } from './friend.interface';
import { HttpClient } from '@angular/common/http';
import { first, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class VKapiService {
  public REDIRECT_URI = environment.backendURL;
  private _friends: IFriend[];

  constructor(private httpClient: HttpClient) {}

  set userId(id: string) {
    if (id !== 'undefined') {
      localStorage.setItem('webim-test-vkId', id);
    }
  }

  get userId(): string | null {
    return localStorage.getItem('webim-test-vkId');
  }

  get friends(): Observable<IFriend[]> {
    if (!this.userId) {
      return throwError('no user id');
    }

    if (this._friends) {
      return of(this._friends).pipe(first());
    }

    const url = `${environment.backendURL}/VKgetfriends/${this.userId}`;

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
    const url = `${environment.backendURL}/VKlogout/${this.userId}`;

    localStorage.removeItem('webim-test-vkId');
    this._friends = null;

    return this.httpClient.delete(url);
  }
}
