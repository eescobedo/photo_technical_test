import express from 'express'
import routes from './routes/photos'
import 'dotenv/config'
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// add configuration to environment port
const PORT = process.env.ENVIRONMENT_PORT ?? 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!!')
  res.send('pong')
})

app.use('/api/photos', routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
