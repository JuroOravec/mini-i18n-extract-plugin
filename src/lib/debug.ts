import debugPkg from 'debug';
import readPkgUp from 'read-pkg-up';

function getDebugLogger() {
  const { packageJson: { name = '' } = {} } =
    readPkgUp.sync({ cwd: module.filename }) || {};
  if (!name) {
    console.warn(
      'Cannot find package name, using console.log instead of debug package',
    );
    return console.log;
  }
  return debugPkg(name);
}

const debug = getDebugLogger();

export default debug;
