import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/config.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config
  public configSubject$ = new BehaviorSubject<Config>(new Config())

  constructor(private http: HttpClient) {
  }

  updateConfig(config: Config) {
    this.config = config
    this.configSubject$.next(this.config)
  }

  loadConfig() {
    return this.http
      .get<Config>('./assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config
        this.configSubject$.next(this.config)
      });
  }
}