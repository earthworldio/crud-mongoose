const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    list: { type: String, require: 'true', unique: true },
    important: { type: String, require: 'true' },
    description: { type: String, require: 'true' }
})

const List = mongoose.model('List', listSchema)
module.exports = List