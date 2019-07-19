import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { VKapiService } from '../services/vkapi.service';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  @ViewChild(LoaderComponent, {static: true}) loader: LoaderComponent;
  @ViewChild('authLink', {static: true}) authLink: ElementRef;

  constructor(private router: Router,
              private renderer: Renderer2,
              public vkApiService: VKapiService) {}

  ngOnInit() {
    // if user is already authenticated here will be success response
    this.vkApiService.friends.subscribe(() => {
      this.router.navigate(['/main']);
    }, () => {
      this.loader.hide();
      this.renderer.setStyle(this.authLink.nativeElement, 'display', 'block');
    });
  }
}
