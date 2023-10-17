import { LeaderBoard, Server } from '../types';
import { mapLeaderBoardObjectToRankingArray } from './utils';

export class BBRClient {
  readonly #baseUrl: string = 'https://publicapi.battlebit.cloud/';

  constructor(baseUrl?: string) {
    if (baseUrl) {
      this.#baseUrl = baseUrl;
    }
  }

  async #callGet(url: string): Promise<Response> {
    try {
      return await fetch(url, {
        method: 'GET',
      });
    } catch (error: unknown) {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      //rethrow
      throw error;
    }
  }

  /**
   * Returns a list all known (and whitelisted) servers to BattleBit.
   */
  async getServers(): Promise<Server[] | undefined> {
    const url = `${this.#baseUrl}Servers/GetServerList`;

    const response = await this.#callGet(url);

    if (response.ok) {
      return response.json();
    }
  }

  /**
   * Returns the current leaderboard
   * Unpacks the leaderboard response into a more usable response
   */
  async getLeaderBoard(): Promise<LeaderBoard | undefined> {
    const url = `${this.#baseUrl}Leaderboard/Get`;
    const response = await this.#callGet(url);

    if (response.ok) {
      const jsonResult = await response.json();

      return {
        MostHeals: mapLeaderBoardObjectToRankingArray(jsonResult, 'MostHeals'),
        MostKills: mapLeaderBoardObjectToRankingArray(jsonResult, 'MostKills'),
        MostLongestKill: mapLeaderBoardObjectToRankingArray(
          jsonResult,
          'MostLongestKill'
        ),
        MostRevives: mapLeaderBoardObjectToRankingArray(
          jsonResult,
          'MostRevives'
        ),
        MostRoadkills: mapLeaderBoardObjectToRankingArray(
          jsonResult,
          'MostRoadkills'
        ),
        MostVehiclesDestroyed: mapLeaderBoardObjectToRankingArray(
          jsonResult,
          'MostVehiclesDestroyed'
        ),
        MostVehicleRepairs: mapLeaderBoardObjectToRankingArray(
          jsonResult,
          ' MostVehicleRepairs'
        ),
        MostXP: mapLeaderBoardObjectToRankingArray(jsonResult, 'MostXP'),
        TopClans: mapLeaderBoardObjectToRankingArray(jsonResult, 'TopClans'),
      };
    }
  }
}
