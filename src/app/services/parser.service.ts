import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private http: HttpClient) {}

  public getData(): Episode {
    let episode = new Episode()
    this.http.get('assets/sampleoutput.txt', {responseType: 'text'}).subscribe(data => {
      console.log(data);
      episode.Crowns = 1;
    });
    return episode
  }
}
