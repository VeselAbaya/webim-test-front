import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VKapiService } from '../services/vkapi.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(private router: Router,
              public vkApiService: VKapiService) {}

  ngOnInit() {
    // if user is already authenticated here will be success response
    this.vkApiService.friends.subscribe(() => {
      this.router.navigate(['/main']);
    });
  }
}
