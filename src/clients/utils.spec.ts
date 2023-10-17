import { mapLeaderBoardObjectToRankingArray } from './utils';

describe('Utils', () => {
  describe('mapLeaderBoardObjectToRankingArray', () => {
    it('should return the ranking array', () => {
      const input = {
        '1': {
          MostHeals: [
            {
              Name: 'test',
              Value: '123',
            },
          ],
        },
      };

      const result = mapLeaderBoardObjectToRankingArray(input, 'MostHeals');

      expect(result).toBe(input['1'].MostHeals);
    });

    it('should throw an error if key not found in input', () => {
      const input = {
        '1': {
          MostHeals: [
            {
              Name: 'test',
              Value: '123',
            },
          ],
        },
      };

      expect(() =>
        mapLeaderBoardObjectToRankingArray(input, 'AnotherRandomKey')
      ).toThrowError();
      
    });
    
    it('should handle if input is undefined', () => {
        expect(() =>
        mapLeaderBoardObjectToRankingArray(undefined, 'AnotherRandomKey')
        ).toThrowError();
    })
  });
});
