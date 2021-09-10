import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { router } from './routes/routes'

export const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({ allowedHeaders: '*', exposedHeaders: '*', origin: '*', methods: '*' }))
app.use((_req, res, next) => {
	res.type('json')
	next()
})

app.use('/api', router)
