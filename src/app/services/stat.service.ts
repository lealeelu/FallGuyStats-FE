import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { StatResponse } from '../models/stat-response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, switchMap, retry, share, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private stats$: Observable<StatResponse>
  private stopPolling = new Subject()

  constructor(
    private http: HttpClient
  ) { 
    let headers = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'applcation/json')
    this.stats$ = timer(1, 3000000).pipe(
      switchMap(() => this.http.get<StatResponse>("https://localhost:5001/api/Stats", { 'headers': headers })),
      retry(),
      share(),
      takeUntil(this.stopPolling))
  }

  getStats(): Observable<StatResponse> {
    return this.stats$
  }

  ngOnDestroy() {
    this.stopPolling.next()
  }
}
