import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Cached from './cached.decorator';


@Injectable({
  providedIn: 'root'
})
export class CachedDataService {
  private subscription: Subscription;


  constructor(private http: HttpClient) {
  }


  @Cached()
  fetchData(cached?: boolean, key?: string): Observable<any> {
    key = key || '5881028';
    const params: HttpParams = new HttpParams({fromObject: {key}});
    return this.http.get<any>(`https://www.boredapi.com/api/activity`, {
      responseType: 'json',
      params,
    }).pipe(map((response: Response) => {
      return response;
    }));
  }

  update() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.fetchData(false, '3881028').subscribe();
  }
}
