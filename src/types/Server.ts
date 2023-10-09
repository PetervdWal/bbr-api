export interface Server {
  Name: string
  Map: string
  MapSize: string
  Gamemode: string
  Region: string
  Players: number;
  QueuePlayers: number;
  MaxPlayers: number;
  Hz: number;
  DayNight: 'Day' | 'Night';
  IsOfficial: boolean
  HasPassword: boolean
  AntiCheat: 'EAC';
  Build: string;
}