import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;
  sub: Subscription;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.sub = this.appService.getData().subscribe(response => {
      if (response) {
        this.data = response.results.sort(this.appService.sortStr);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
