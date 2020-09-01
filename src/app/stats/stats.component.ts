import { Component, OnInit } from '@angular/core'
import { Episode } from '../models/episode.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  lastEpisode: Episode;
  showLastEpisode: boolean = false;
  showCheaterCount: boolean = true;

  ngOnInit(): void {
    //this.lastEpisode = this.http.get
  }
}
