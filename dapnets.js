'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var normalize = _interopDefault(require('normalize-newline'));
var bs58 = require('bs58');

const netHash = net => bs58.encode(Buffer.from(`${net}-`)).slice(0, 24);

const subnetHash = (main, sub) => {
  const prefix = nethash(main).slice(0, 4);
  const hash = netHash(sub);
  return `${prefix}${hash.slice(4, hash.length)}`
};

var nets = {
  leofcoin: { 
    swarmKey: `/key/swarm/psk/1.0.0/\n/base16/\nb37e0b6f3574931ce7a0ef863f64b0f01ba111bb7fabb6a661fc67b51b4ddd15`,
    netPrefix: subnetHash('leofcoin','olivia')
  },
  we: { 
    swarmKey: `/key/swarm/psk/1.0.0/\n/base16/\nb37e0b6f3574931ce7a0ef863f64b0f01ba111bb7fabb6a661fc67b51b4ddd15`,
    netPrefix: subnetHash('leofcoin','olivia')
  }
};

var dapnets = async (net) => {
  if (!nets[net]) throw new Error(`Nothing found for ${net}`);
  net = nets[net];
  try {
    net.swarmKey = normalize(net.swarmKey);
  } catch (e) {
    throw new Error(`Normalizing swarmKey ${net.swarmKey}`)
  }
  return net;
};

module.exports = dapnets;
