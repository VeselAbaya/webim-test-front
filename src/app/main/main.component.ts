import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VKapiService } from '../services/vkapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public vkApiService: VKapiService) {}

  ngOnInit() {
    const queryParamMap = this.activatedRoute.snapshot.queryParamMap;
    if (queryParamMap.has('vkId') && !localStorage.getItem('webim-test-vkId')) {
      localStorage.setItem('webim-test-vkId', queryParamMap.get('vkId'));
    }
  }

  onLogout() {
    this.vkApiService.logout().subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }
}
