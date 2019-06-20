import { encode } from 'bs58';

const nethash = net => encode(Buffer.from(`${net}-`)).slice(0, 24);

const subnetHash = (main, sub) => {
  const prefix = nethash(main).slice(0, 4);
  const hash = nethash(sub);
  return `${prefix}${hash.slice(4, hash.length)}`
}

export default {
  leofcoin: { 
    swarmKey: `/key/swarm/psk/1.0.0/\n/base16/\nb37e0b6f3574931ce7a0ef863f64b0f01ba111bb7fabb6a661fc67b51b4ddd15`,
    netPrefix: subnetHash('leofcoin','olivia')
  },
  we: { 
    swarmKey: `/key/swarm/psk/1.0.0/\n/base16/\nb37e0b6f3574931ce7a0ef863f64b0f01ba111bb7fabb6a661fc67b51b4ddd15`,
    netPrefix: subnetHash('leofcoin','olivia')
  }
}