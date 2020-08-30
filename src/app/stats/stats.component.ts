import { Component, OnInit } from '@angular/core'
import { Episode } from '../models/episode.model'
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
  showLastEpisode: boolean = false;

  ngOnInit(): void {
    this.lastEpisode = this.parserService.getData()
  }
}
