const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    skillshare: {
        type: String,
        required: true
    },
    skillwanted: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
})
module.exports = mongoose.model('profile', ProfileSchema);