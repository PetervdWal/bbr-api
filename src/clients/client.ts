import {Server} from '../types';


export class BBRClient {
    #baseUrl = 'https://publicapi.battlebit.cloud/'
    
    constructor(baseUrl?: string) {
        if(baseUrl){
            this.#baseUrl = baseUrl
        }
    }
    
    async getServers(): Promise<Server[]> {
        const url = `${this.#baseUrl}Servers/GetServerList`;
        let response: Response
        try{
            response = await fetch(url, {
                method: 'GET'
            });
        }catch (e: unknown){
            console.error('something off', e);
            throw new Error();
        }
        
        if(response.status == 200){
            return response.json();    
        }
        throw new Error();
    }
}