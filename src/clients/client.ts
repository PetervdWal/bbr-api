import { Server } from '../types';

export class BBRClient {
  #baseUrl = 'https://publicapi.battlebit.cloud/';

  constructor(baseUrl?: string) {
    if (baseUrl) {
      this.#baseUrl = baseUrl;
    }
  }

  /**
   * Returns a list all known (and whitelisted) servers to BattleBit.
   */
  async getServers(): Promise<Server[] | undefined> {
    const url = `${this.#baseUrl}Servers/GetServerList`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: 'GET',
      });
    } catch (error: unknown) {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      //rethrow
      throw error
    }

    if (response.ok) {
      return response.json();
    }
  }
}
