import { log } from '@lg/utils'

const core = () => {
  console.log('core change')
  log.info('test', 'Hello world!')
}

export default core