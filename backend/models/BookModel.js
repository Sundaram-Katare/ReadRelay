const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    authors: [{ type: String}],
    category: { type: String },
    language: { type: String },
    coverImages: [ {type: String }],
    addedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    isForExchange: { type: Boolean, default: false },
    condition: { type: String, enum: ['New', 'Good', 'Worn']},
    averageRating: { type: Number, default: 0 },
    totalRatings: { type: Number },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true }, { collection: 'book'});    

module.exports = mongoose.model('Book', bookSchema);