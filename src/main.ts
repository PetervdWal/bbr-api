import { BBRClient } from './clients';
import { LeaderBoard } from './types';

const client = new BBRClient();

client.getLeaderBoard().then((response) => {
  if (response) {
    console.log('success');
    console.log(response);
  }
});
