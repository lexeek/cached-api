import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cached from './cached.decorator';


@Injectable({
  providedIn: 'root'
})
export class CachedDataService {

  constructor(private http: HttpClient) {
  }


  @Cached()
  fetchData(cached?: boolean): Observable<any> {
    const key = '5881028';
    const params: HttpParams = new HttpParams({fromObject: {key}});
    return this.http.get<any>(`https://www.boredapi.com/api/activity`, {
      responseType: 'json',
      params,
    }).pipe(map((response: Response) => {
      return response;
    }));
  }
}
