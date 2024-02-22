const express = require('express')
const app = express()

const ListModel = require('../model/List')
const List = require('../model/List')

app.post('/list/add', async (req, res) => {
    try {
        const { list, important, description } = req.body

        const data = new List({ list, important, description })
        await data.save()

        res.send({ message: 'success', result: data })
    } catch (error) { res.send({ message: error.message }) }
})

app.get('/list/get', async (req, res) => {
    try {
        const data = await ListModel.find({})
        res.send({ message: 'success', result: data })
    } catch (error) { res.send({ message: error.message }) }
})

app.post('/list/delete', async (req, res) => {
    try {
        const itemId = req.body.id
        const data = await ListModel.deleteOne({ id: itemId })
        res.send({ message: 'success' })
    } catch (error) { res.send({ message: error.message }) }
})


module.exports = app