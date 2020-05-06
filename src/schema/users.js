const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    _company: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
    }
}, {
    timestamps: true
});


module.exports = Schema;
