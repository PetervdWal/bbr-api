import { BBRClient } from './client';


describe('BBRClient', () => {
  describe('GetServers', () => {
    it('should return the fetch result', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve([]) 
      })) as any;
      
      const client = new BBRClient();
      const result = await client.getServers();

      expect(result).toStrictEqual([]);
      expect(fetch).toHaveBeenCalled();
    });
    
    it('should throw an error if fetch fails', () => {
      global.fetch = jest.fn(() => Promise.reject()) as any;

      const client = new BBRClient();
      expect(client.getServers()).rejects.toThrow()
    });
    
    it('should throw an error if fetch returns anything but 200', () => {
      global.fetch = jest.fn(() => Promise.resolve({
        status: 400,
        json: () => Promise.resolve([]) 
      })) as any;

      const client = new BBRClient();
      expect(client.getServers()).rejects.toThrow()
    });
    
    it('should be able to construct with a custom base url', async () => {
      global.fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve([]) 
      })) as any;

      const client = new BBRClient('custom');
      const result = await client.getServers();

      expect(result).toStrictEqual([]);
      expect(fetch).toHaveBeenCalledWith(expect.stringMatching('custom'), {method: "GET"});
    })
  });
});