import * as Express from 'express'
import router from '../routes'
import config from '../config'

const app = Express()

const endpoint: string = `${config.path}/${config.version}/`

app.use(endpoint, router)

app.listen(config.port, () => {
  console.log(`> Ready on http://localhost:${config.port}${config.path}/${config.version}/`)
})

export default app
