const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
}, {
    timestamps: true
});
module.exports = Schema;
