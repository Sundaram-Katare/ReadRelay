const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    requestedBook: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true }, { collection: 'exchangeRequest'});

module.exports = mongoose.model('ExchangeRequest', requestSchema);