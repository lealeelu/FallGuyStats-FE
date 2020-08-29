import { Component, OnInit } from '@angular/core'
import { Episode } from '../models/episode.model'
import { Round, Badge, RoundCode } from '../models/round.model'
import { ParserService } from '../services/parser.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  constructor(
    private parserService: ParserService
  ) { }

  lastEpisode: Episode;

  ngOnInit(): void {
    //dummy episode
    /*
    this.lastEpisode = new Episode()
    this.lastEpisode.Crowns = 1
    this.lastEpisode.Kudos = 100
    let round1 = new Round()
    round1.roundCode = RoundCode.gauntlet
    round1.qualified = true
    round1.position = 4
    round1.kudos = 100
    round1.fame = 200
    round1.badge = Badge.gold
    let round2 = new Round()
    round2.roundCode = RoundCode.matchfall
    round1.qualified = false
    round1.position = 0
    round1.kudos = 0
    round1.fame = 0
    round1.badge = Badge.nothing
    this.lastEpisode.Rounds = [round1, round2]
*/
    this.lastEpisode = this.parserService.getData()
  }

}
