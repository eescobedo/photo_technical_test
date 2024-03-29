import express from 'express'
import photosRouter from './routes/photos'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!!')
  res.send('pong')
})

app.use('/api/photos', photosRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
