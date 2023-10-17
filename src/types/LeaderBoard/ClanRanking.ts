/**
* ClanRanking based on XP
*/
export interface ClanRanking {
    /**
    * The name of the clan
    */
    Clan: string,
    /**
    * The tag of the clan which is visible in the servers
    */
    Tag: string,
    /**
    * Amount of cumulative XP earned by the players of this clan.
    */
    XP: string,
    /**
    * The max amount of players this clan had.
    */
    MaxPlayers: string
}