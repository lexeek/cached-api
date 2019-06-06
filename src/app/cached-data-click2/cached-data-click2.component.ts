import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CachedDataService } from '../services/cached-data.service';

@Component({
  selector: 'app-cached-data-click2',
  templateUrl: './cached-data-click2.component.html',
  styleUrls: ['./cached-data-click2.component.css']
})
export class CachedDataClick2Component implements OnInit, OnDestroy {
  private subscription: any;
  private data: any[] = [];

  constructor(public cachedDataService: CachedDataService, private ch: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.cachedDataService.fetchData().subscribe(response => {
      this.data.push(response);
    });
  }

  displayCachedData() {
    this.cachedDataService.update();

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
