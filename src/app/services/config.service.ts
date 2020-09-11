import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config;

  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http
      .get<Config>('./assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }

  saveConfig() {
    this.http.post<Config>('./assets/config.json', this.config)
  }
}