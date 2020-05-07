import debug from './lib/debug';

export default function printHello(name: string) {
  debug(`Printing name "${name}"`);
  console.log(`Hello ${name}!`);
}
