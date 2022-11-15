import { log } from '@lg/utils';

const core = () => {
  console.log('core package');
  log.info('core', 'Hello world!');
};

export { core as default };
