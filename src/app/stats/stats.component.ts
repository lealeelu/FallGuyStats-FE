import { Component, OnInit } from '@angular/core'
import { Episode } from '../models/episode.model'
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { SessionStat, StatResponse, RoundStats } from '../models/stat-response.model'
import { Observable, timer, BehaviorSubject, Subject } from 'rxjs';
import { StatService } from '../services/stat.service'
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  stats$: Observable<StatResponse>
  todayWinrate: number
  seasonWinrate: number

  showLastEpisode: boolean = false
  showCheaterCount: boolean = true
  
  constructor(
    private statService: StatService
  ) { 
  }

  ngOnInit(): void {
    this.stats$ = this.statService.getStats().pipe(
      tap((stats) => {
        //episode
        if (stats.todayStats.episodeCount > 0)
          this.todayWinrate = stats.todayStats.crownCount/stats.todayStats.episodeCount * 100 
        else
          this.todayWinrate = 0
        if (stats.seasonStats.episodeCount > 0)
          this.seasonWinrate = stats.seasonStats.crownCount/stats.seasonStats.episodeCount * 100 
        else this.seasonWinrate = 0
      }))
  }
}
