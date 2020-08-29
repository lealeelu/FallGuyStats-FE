import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Episode } from '../models/episode.model';
import { Round, RoundCode } from '../models/round.model';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private http: HttpClient) {}

  public getData(): Episode {
    let episode = new Episode()
    this.http.get('assets/sampleoutput.txt', {responseType: 'text'}).subscribe(data => {
      let crownIndex = data.indexOf("Crowns:")
      let crownState = data.substring(crownIndex+8,crownIndex+9)
      if (crownState == "1") {
          // increase crown tally in local stats file by 1
          console.log(`Crowns to Add: ${crownState}`)
      }
      for (let i = 0; i < 5; i++) {
          let roundIndex = data.indexOf(`Round ${i}`)
          if (roundIndex != -1) {
              let roundCodeText = data.substring(roundIndex+10,roundIndex+30)
              let roundCodes = roundCodeText.match(/r.+]/g)
              let roundCode = roundCodes[0].replace(/round_|]/g, "")

              let qualifiedIndex = data.indexOf("Qualified:", roundIndex)
              let qualifiedStateText = data.substring(qualifiedIndex, qualifiedIndex+20)
              let qualifiedRegEx = /Qualified:.([a-zA-Z]+)/g
              let qualifiedState = qualifiedRegEx.exec(qualifiedStateText)
              
              let positionIndex = data.indexOf("Position:", roundIndex)
              let positionStateText = data.substring(positionIndex, positionIndex+25)
              let positionRegEx = /Position:.(\d+)/g
              let positionState = positionRegEx.exec(positionStateText)

              let kudosIndex = data.indexOf("Kudos:", roundIndex)
              let kudosStateText = data.substring(kudosIndex, kudosIndex+15)
              let kudosRegEx = /Kudos:.(\d+)/g
              let kudosState = kudosRegEx.exec(kudosStateText)

              let fameIndex = data.indexOf("Fame:", roundIndex)
              let fameStateText = data.substring(fameIndex, fameIndex+15)
              let fameRegEx = /Fame:.(\d+)/g
              let fameState = fameRegEx.exec(fameStateText)

              let bonusTier = 3
              let bonusTierIndex = data.indexOf("bonusTier:", roundIndex)
              let bonusTierStateText = data.substring(bonusTierIndex, bonusTierIndex+16)
              let bonusTierRegEx = /Bonus Tier:.(\d+)/g
              let bonusTierState = bonusTierRegEx.exec(bonusTierStateText)
              if (bonusTierState[1]) {
                bonusTier = parseInt(bonusTierState[1])
              }

              let bonusKudosIndex = data.indexOf("Bonus Kudos:", roundIndex)
              let bonusKudosStateText = data.substring(bonusKudosIndex, bonusKudosIndex+20)
              let bonusKudosRegEx = /Bonus Kudos:.(\d+)/g
              let bonusKudosState = bonusKudosRegEx.exec(bonusKudosStateText)

              let bonusFameIndex = data.indexOf("Bonus Fame:", roundIndex)
              let bonusFameStateText = data.substring(bonusFameIndex, bonusFameIndex+20)
              let bonusFameRegEx = /Bonus Fame:.(\d+)/g
              let bonusFameState = bonusFameRegEx.exec(bonusFameStateText)
              
              let badgeId = ""
              let badgeIndex = data.indexOf("BadgeId:", roundIndex)
              let badgeStateText = data.substring(badgeIndex, badgeIndex+16)
              let badgeRegEx = /BadgeId:.([a-z]+)/g
              let badgeState = badgeRegEx.exec(badgeStateText)

              if (!badgeState[1] == null && qualifiedState[1] == "True") {
                badgeId = "last"
              }
              else if (qualifiedState[1] == "False") {
                badgeId = "failure"
              }
              else {
                badgeId = badgeState[1]
              }

              let round = new Round()
              round.roundCode = RoundCode.(roundCode)
              round.qualified = (qualifiedState[1] == "True")
              round.position = parseInt(positionState[1]) 
              round.kudos = parseInt(kudosState[1])
              round.fame = parseInt(fameState[1])
              round.bonusTier = bonusTier
              round.bonusKudos = parseInt(bonusKudosState[1])
              round.bonusFame = parseInt(bonusFameState[1])
              round.badge = Badge.badgeId
          }
      }
      episode.Kudos
      episode.Fame
      episode.Rounds
      episode.Crowns = parseInt(crownState);

    });
    return episode
  }
}
