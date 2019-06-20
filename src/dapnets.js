import normalize from 'normalize-newline';
import nets from './lib/nets.js';

export default async (net) => {
  if (!nets[net]) throw new Error(`Nothing found for ${net}`);
  net = nets[net];
  try {
    net.swarmKey = normalize(net.swarmKey);
  } catch (e) {
    throw new Error(`Normalizing swarmKey ${net.swarmKey}`)
  }
  return net;
}