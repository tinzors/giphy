require('dotenv').load()
import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
import config from '../config.json'
import routes from './routes/route-manifest'
import appRoot from 'app-root-path'
import authentication from './utils/authentication'

let app = express()
let APP_PORT = config.APP_PORT
let STATIC_FILES = config.STATIC_FILES

// CORS
app.use(cors())

// Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Serve static files
app.use(express.static(STATIC_FILES))

// Routes
let router = express.Router()

app.use(router)
routes(router)

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`)
})
