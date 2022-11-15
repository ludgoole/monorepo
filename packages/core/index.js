import { log } from '@lg/utils'

const core = () => {
  console.log('core package')
  log.info('core', 'Hello world!')
}

export default core