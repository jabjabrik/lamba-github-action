import express from 'express'
import serverless from 'serverless-http'

const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello world!' }))

if (process.env.NODE_ENV === 'dev') {
    app.listen(3000, () => console.log('server is running on http://localhost:3000'))
}

export const handler = serverless(app)