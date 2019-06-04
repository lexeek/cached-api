import { Component, OnDestroy, OnInit } from '@angular/core';
import { CachedDataService } from '../services/cached-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cached-data-click1',
  templateUrl: './cached-data-click1.component.html',
  styleUrls: ['./cached-data-click1.component.css']
})
export class CachedDataClick1Component implements OnInit, OnDestroy {
  private data: any[] = [];
  private subscription: Subscription;

  constructor(public cachedDataService: CachedDataService) {
  }

  ngOnInit() {
  }

  displayCachedData() {
    this.subscription = this.cachedDataService.fetchData().subscribe(response => this.data.push(response));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
