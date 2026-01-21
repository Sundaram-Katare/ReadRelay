const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: '' },
    bio: { type: String, default: 'Reader at ReadRelay' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
}, { collection: 'user' }, { timestamps: true });

module.exports = mongoose.model('User', userSchema);