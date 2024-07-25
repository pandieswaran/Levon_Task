const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: String, required: true },
}, {
    timestamps: true
});

const UserSignup = mongoose.model('UserData', UserDetailsSchema);

module.exports = UserSignup;
