export class SessionStat {
    public crownCount: number;
    public episodeCount: number;
    public cheaterCount: number;
    public roundsSinceCrown: number;
}

export class StatResponse {
    public todayStats: SessionStat;
    public seasonStats: SessionStat;
}