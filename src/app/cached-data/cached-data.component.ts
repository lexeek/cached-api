import { Component, OnDestroy, OnInit } from '@angular/core';
import { CachedDataService } from '../services/cached-data.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cached-data',
  templateUrl: './cached-data.component.html',
  styleUrls: ['./cached-data.component.css']
})
export class CachedDataComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  data: any;
  private subscription: Subscription;

  constructor(public cachedDataService: CachedDataService) {
  }

  ngOnInit() {
    this.subscription = this.cachedDataService.fetchData().pipe(takeUntil(this.unsubscribe$)).subscribe(response => this.data = response);

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
