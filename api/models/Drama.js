const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    year: Date,
    photos: [String],
    plot: String,
    genres: [String],
    extraInfo: String,
    episodes: Number,
    airingStarted: Date,
    airingEnded: Date,
    duration: Number,
    country: String,
});

const DramaModel = mongoose.model('Drama', dramaSchema);
 
module.exports = DramaModel;