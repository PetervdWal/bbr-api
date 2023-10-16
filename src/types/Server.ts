export interface Server {
  /**
   * The name of the server
   */
  Name: string;
  /**
   * The map that is currently being played
   */
  Map: string;
  /**
   * The amount of players this map can hold
   */
  MapSize: string;
  /**
   * The Map that is currently being played
   */
  Gamemode: string;
  /**
   * The region this server is hosted
   */
  Region: string;
  /**
   * Current amount of players playing in the server
   */
  Players: number;
  /**
   * Current amount of players waiting in queue to join the server
   */
  QueuePlayers: number;
  /**
   * Max amount of players in this server
   */
  MaxPlayers: number;
  /**
   * Tickrate of the server
   */
  Hz: number;
  /**
   * Which ingame time is playing. Day is your regular shooter gamemode, Night is significantly darker. Players can use nightvision to see better and flares to blind nightvision users.
   */
  DayNight: 'Day' | 'Night';
  /**
   * The server is official if it is hosted by BattleBit's Dev Team
   */
  IsOfficial: boolean;
  /**
   * This server requires a password to get in if the flag is set to true.
   */
  HasPassword: boolean;
  /**
   * Which anticheat mechanism the server is using. Currently only EAC. See for more info: {@link https://www.easy.ac/en-us| easy.ac}
   */
  AntiCheat: 'EAC';
  /**
   * The release build of BattleBit the server is currently running.
   */
  Build: string;
}
