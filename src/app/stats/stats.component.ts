import { Component, OnInit } from '@angular/core'
import { Episode } from '../models/episode.model'
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { SessionStat, StatResponse } from '../models/stat-response.model'
import { Observable, timer, BehaviorSubject, Subject } from 'rxjs';
import { StatService } from '../services/stat.service'
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  stats$: Observable<StatResponse>
  //stats = null

  showLastEpisode: boolean = false
  showCheaterCount: boolean = true
  
  constructor(
    private statService: StatService
  ) { 
  }

  ngOnInit(): void {
    this.stats$ = this.statService.getStats()
  }
}
