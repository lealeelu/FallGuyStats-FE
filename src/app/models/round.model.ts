export class Round {
    roundCode: string
    qualified: boolean
    position: number
    kudos: number
    fame: number
    bonusTier: number
    bonusKudos: number
    bonusFame: number
    badge: Badge

    roundCodeMap = new Map<string, string>([
        ["gauntletcode", "Gauntlet"],
        ["fallcode", "Match Fall"]
    ])

    getRoundName(roundCode: string): string {
        if (this.roundCodeMap.has(roundCode)) return this.roundCodeMap.get(roundCode)
        else return "unknown round code"
    }
}

export enum Badge {
    gold,
    silver,
    bronze,
    nothing
}