import printHello from '../print-hello';

describe('Hello', () => {
  const originalLog = console.log;
  afterEach(() => (console.log = originalLog));

  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);
  beforeEach(() => (console.log = mockedLog));

  test('World', () => {
    printHello('World');
    expect(consoleOutput).toEqual([
      'Hello World!'
    ])
  })
  });
});
