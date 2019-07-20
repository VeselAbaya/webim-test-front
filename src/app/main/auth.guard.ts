import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { VKapiService } from '../services/vkapi.service';

export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private vkApiService: VKapiService) {}

  canActivate(routeSnapshot: ActivatedRouteSnapshot): Observable<boolean> |
                                                      Promise<boolean> |
                                                      boolean {
    // '_id' - mongoDB user id
    const queryParamMap = routeSnapshot.queryParamMap;
    if (queryParamMap.has('_id') && !this.vkApiService.userId) {
      this.vkApiService.userId = queryParamMap.get('_id');
    }

    return new Observable<boolean>(subscriber => {
      this.vkApiService.friends.subscribe(() => {
        subscriber.next(true);
        subscriber.complete();
      }, () => {
        this.vkApiService.userId = null;

        subscriber.next(false);
        subscriber.complete();

        this.router.navigate(['/auth']);
      });
    });
  }
}
