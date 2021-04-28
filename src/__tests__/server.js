import {setupWorker} from 'msw'
import {handlers} from './server-handlers'

setupWorker(...handlers)

const server = setupWorker(...handlers)

server.start({
  quiet: true
})
