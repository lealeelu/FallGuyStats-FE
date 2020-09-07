import { Component, OnInit } from '@angular/core'
import { StatResponse, RoundStats } from '../models/stat-response.model'
import { Observable} from 'rxjs';
import { StatService } from '../services/stat.service'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  stats$: Observable<StatResponse>
  todayWinrate: string
  seasonWinrate: string

  showLastEpisode: boolean = false
  showCheaterCount: boolean = false
  
  constructor(
    private statService: StatService
  ) { 
  }

  ngOnInit(): void {
    this.stats$ = this.statService.getStats().pipe(
      tap((stats) => {
        //episode
        if (stats.todayStats.episodeCount > 0)
          this.todayWinrate = (stats.todayStats.crownCount/stats.todayStats.episodeCount * 100).toFixed(2)
        else
          this.todayWinrate = '0'
        if (stats.seasonStats.episodeCount > 0)
          this.seasonWinrate = (stats.seasonStats.crownCount/stats.seasonStats.episodeCount * 100).toFixed(2)
        else this.seasonWinrate = '0'
        if (stats.roundStats && stats.roundStats.QualifiedCount > 0) stats.roundStats.QualifiedCount -= stats.roundStats.GoldCount + stats.roundStats.SilverCount + stats.roundStats.BronzeCount
      }))
  }
}
