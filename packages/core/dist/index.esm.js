import { log } from '@lg/utils';

const core = () => {
  console.log('core change');
  log.info('core', 'Hello world!');
};

export { core as default };
