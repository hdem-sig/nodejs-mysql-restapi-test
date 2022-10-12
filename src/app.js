//console.log("Hol Mundo")
//const express = require ('express')
//import { restart } from 'nodemon'

import express from 'express'
import sitiosRoutes from './routes/sitios.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express ()

app.use(express.json())

app.use('/api',sitiosRoutes)
app.use(indexRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;