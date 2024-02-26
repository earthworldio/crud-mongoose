const express = require('express')
const app = express()
const UserModel = require('../model/User')
const User = require('../model/User')

app.post('/user/register', async (req, res) => {
    try {
        const { username, password } = req.body

        const data = new User({ username, password })
        await data.save()

        res.send({ message: 'success' })
    } catch (error) {
        res.send({ message: error.message })
    }
})

app.post('/user/login', async (req, res) => {
    try {
        const member = await UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if (member != null) {
            res.send({ message: 'success', member: member })
            return
        }
        res.send({ message: 'fail' })
    } catch (error) {
        res.send({ message: error.message })
    }

})

app.post('/user/getName', async (req, res) => {
    try {

    } catch (error) {
        res.send({ mesasge: error.message })
    }
})

module.exports = app