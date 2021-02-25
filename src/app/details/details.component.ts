import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  first: string;
  last: string;
  phone: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.first = params.first;
      this.last = params.last;
      this.phone = params.phone;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
