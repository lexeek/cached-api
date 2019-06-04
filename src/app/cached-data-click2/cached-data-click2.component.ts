import { Component, OnDestroy, OnInit } from '@angular/core';
import { CachedDataService } from '../services/cached-data.service';

@Component({
  selector: 'app-cached-data-click2',
  templateUrl: './cached-data-click2.component.html',
  styleUrls: ['./cached-data-click2.component.css']
})
export class CachedDataClick2Component implements OnInit, OnDestroy {
  private subscription: any;
  private data: any[] = [];

  constructor(public cachedDataService: CachedDataService) {
  }

  ngOnInit() {
  }

  displayCachedData() {
    this.subscription = this.cachedDataService.fetchData(false).subscribe(response => this.data.push(response));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
