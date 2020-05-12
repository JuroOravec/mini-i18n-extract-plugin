import { randomBytes } from 'crypto';
import jsdom from 'jsdom';

import exposedPromise from './exposed-promise';

type Listener = (dom: jsdom.JSDOM) => void;

export interface Options extends jsdom.ConstructorOptions {
  isAsync?: boolean;
  onAfter?: Listener;
  waitForError?: boolean;
}

export default async function runBrowserScript(
  filepath: string,
  options: Options = {},
) {
  const {
    isAsync = false,
    onAfter,
    waitForError = false,
    ...jsdomOptions
  } = options;
  const promise = exposedPromise();
  const virtualConsole = new jsdom.VirtualConsole();
  const scriptId = randomBytes(8).toString('hex');
  const doneSignal = `done-${scriptId}`;

  // Uncomment following if you want to display all logs
  // virtualConsole.sendTo(console);

  virtualConsole.on('error', (err: Error) => {
    promise.reject!(err);
  });
  virtualConsole.on('jsdomError', (err: Error) => {
    promise.reject!(err);
  });
  virtualConsole.on('info', (msg: any) => {
    if (msg === doneSignal && !waitForError) promise.resolve!();
  });

  const dom = new jsdom.JSDOM(
    `<body>
      <script async=${isAsync} defer=${isAsync} src="dist/${filepath}"></script>
      <script type='text/javascript'>console.info('${doneSignal}')</script>
    </body>`,
    {
      runScripts: 'dangerously',
      resources: 'usable',
      virtualConsole,
      ...jsdomOptions,
    },
  );
  await promise.promise;
  if (onAfter) await onAfter(dom);
  return promise.promise;
}
