export class Round {
    roundCode: RoundCode
    qualified: boolean
    position: number
    kudos: number
    fame: number
    bonusTier: number
    bonusKudos: number
    bonusFame: number
    badge: Badge
}

export enum Badge {
    gold,
    silver,
    bronze,
    nothing
}

export enum RoundCode {
    gauntlet = "Gauntlet",
    matchfall = "Match Fall"
}