require('./db')
const express = require('express')
const app = express()
const Player = require('./schema/Player')
var bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', async (req, res) => {
    try {
        const { name, position, team, age, phone } = req.body
        const player = Player.create({ name, position, team, age, phone })
        res.json({
            message: `Successfully Registered for team ${team}`,
            player
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        })
    }
})

app.post('/delete', async (req, res) => {
    try {
        const { id } = req.body
        const player = await Player.findByIdAndDelete(id)
        res.json({
            message: `Member Removed!`
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        })
    }
})

app.post('/update', async (req, res) => {
    try {
        const { id, name, position, team, age, phone } = req.body
        const player = await Player.findById(id)
        player = { ...player, name, position, team, age, phone }
        await player.save()
        res.json({
            message: `Member Removed!`,
            player
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        })
    }
})

app.post('/get', async (req, res) => {
    try {
        const team = req.body.team
        let players
        if (team) {
            players = await Player.find({ team })
        } else {
            players = await Player.find()
        }
        res.json({
            message: `Data Fetched!`,
            players
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        })
    }
})

app.post('/delete', async (req, res) => {
    try {
        const id = req.body.id
        await Player.findByIdAndDelete(id)
        res.json({
            message: `Player Has Deleted!`
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        })
    }
})

app.listen(4003, () => {
    console.log(`App is listening on port: 4003`)
})