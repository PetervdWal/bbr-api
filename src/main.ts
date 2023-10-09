import { BBRClient } from './clients';

const client = new BBRClient();



client.getServers().then((response) => {
    console.log('Counting servers:', response.length)
    response.forEach((server) => {
        console.log(server.Name);
    })
});

