import rimraf from 'rimraf';

export default function pRimraf(path: string) {
  return new Promise((resolve, reject) => {
    rimraf(path, (err) => (err ? reject(err) : resolve()));
  });
}
