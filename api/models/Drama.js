const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    year: Number,
    photos: [String],
    plot: String,
    genres: [String],
    extraInfo: String,
    episodes: Number,
    airingStarted: String,
    airingEnded: String,
    duration: Number,
    country: String,
});

const DramaModel = mongoose.model('Drama', dramaSchema);
 
module.exports = DramaModel;