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
    last,
    failure
}

export enum RoundCode {
    gauntlet_01 = "Hit Parade",
    gauntlet_03 = "Whirlygig",
    match_fall = "Perfect Match",
    chompchomp = "DUNNO",
    door_dash = "Door Dash",
    tunnel = "Roll Out",
    lava = "Slime Climb",
    tip_toe = "Tip Toe",
    floor_fall = "Hex-A-Gone",
    dodge_fall = "Fruit Chute",
    tail_tag = "Solo Tail Tag",
    hoops = "Hoopsie Daisy",
    jump_showdown = "Jump Showdown",
    conveyor_arena = "Team Tail Tag",
    block_party = "Block Party",
    unknown1 = "Fall Mountain",
    unknown2 = "Royal Fumble",
    unknown3 = "Fall Ball",
    unknown4 = "Jinxed",
    unknown5 = "Egg Scramble",
    unknown6 = "Hoarders",
    unknown7 = "Rock'n'Roll",
    unknown8 = "See Saw",
    unknown9 = "Dizzy Heights",
    unknown10 = "Gate Crash",
}