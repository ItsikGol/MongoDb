const mongoose  = require('mongoose')

const PostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    description2: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userIdId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    }
});

module.exports = mongoose.model('Posts', PostSchema);