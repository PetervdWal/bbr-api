import { BBRClient } from './client';
import { LeaderBoard } from '../types';
import * as utils from './utils';

describe('BBRClient', () => {
  let client: BBRClient;
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    ) as any;

    client = new BBRClient();
  });

  describe('GetServers', () => {
    it('should return the fetch result', async () => {
      const result = await client.getServers();

      expect(result).toStrictEqual([]);
      expect(fetch).toHaveBeenCalled();
    });

    it('should throw an error if fetch fails', () => {
      global.fetch = jest.fn(() => Promise.reject(new Error())) as any;

      expect(client.getServers()).rejects.toThrow();
    });

    it('should return undefined if result is not ok', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 400,
          json: () => Promise.resolve([]),
        })
      ) as any;

      const result = await client.getServers();

      expect(result).toBeUndefined();
    });

    it('should be able to construct with a custom base url', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve([]),
        })
      ) as any;

      const client = new BBRClient('custom');
      const result = await client.getServers();

      expect(result).toStrictEqual([]);
      expect(fetch).toHaveBeenCalledWith(expect.stringMatching('custom'), {
        method: 'GET',
      });
    });
  });

  describe('getLeaderBoard', () => {
    it('should return the mapped object', async () => {
      const spy = jest.spyOn(utils, 'mapLeaderBoardObjectToRankingArray').mockImplementation(() => []);
      const result = await client.getLeaderBoard();

      const expected: LeaderBoard = {
        TopClans: [],
        MostXP: [],
        MostHeals: [],
        MostRevives: [],
        MostVehiclesDestroyed: [],
        MostVehicleRepairs: [],
        MostRoadkills: [],
        MostLongestKill: [],
        MostKills: [],
      };

      expect(result).toStrictEqual(expected);
      expect(spy).toBeCalledTimes(9);
    });
  });
});
