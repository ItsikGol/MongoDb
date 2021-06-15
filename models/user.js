const mongoose  = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('user', UserSchema);