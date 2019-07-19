import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VKapiService } from '../services/vkapi.service';
import { IFriend } from '../services/friend.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private friends: IFriend[] = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public vkApiService: VKapiService) {}

  ngOnInit() {
    const queryParamMap = this.activatedRoute.snapshot.queryParamMap;
    if (queryParamMap.has('_id') && !this.vkApiService.userId) {
      this.vkApiService.userId = queryParamMap.get('_id');
    }

    this.vkApiService.friends.subscribe(friends => {
      this.friends = friends;
    });
  }

  onLogout() {
    this.vkApiService.logout().subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }
}
