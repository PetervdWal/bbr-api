import { ClanRanking } from './LeaderBoard/ClanRanking';
import { ValueRanking } from './LeaderBoard/ValueRanking';

/**
* LeaderBoard of various rankings, only official proggression.
*/
export interface LeaderBoard {
  /**
   * Top 5000 clan based on cumulative xp earned by all players of the clan, sorted descending
   */
  TopClans: ClanRanking[];
  /**
   * Top 5000 rankings based on cumulative xp earned by the respective player, value descending
   */
  MostXP: ValueRanking[];
  /**
   * Top 5000 rankings based on cumulative amount of health healed by the respective player, value descending
   */
  MostHeals: ValueRanking[];
  /**
   * Top 5000 rankings based on cumulative amount of revives executed by the respective player, value descending
   */
  MostRevives: ValueRanking[];
  /**
   * Top 5000 rankings based on cumulative amount of vehicles destroyed by the respective player, value descending
   */
  MostVehiclesDestroyed: ValueRanking[];
  /**
   * Top 5000 rankings based on cumulative amount of vehicle health restored by repairing by the respective player, value descending
   */
   MostVehicleRepairs: ValueRanking[];

  /**
   * Top 5000 rankings based on cumulative amount of players killed by running over them in a vehicle by the respective player, value descending
   */
  MostRoadkills: ValueRanking[];
  /**
   * Top 5000 rankings based on the longest shot the player sucessfully killed another player in (in-game) meters, value descending
   */
  MostLongestKill: ValueRanking[];
  /**
   * Top 5000 rankings based on cumulative amount of kills by respective player, value descending
   */
  MostKills: ValueRanking[];
}
