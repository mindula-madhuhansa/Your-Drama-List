const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    year: String,
    photos: [String],
    plot: String,
    genre: [String],
    extraInfo: String,
    episodes: String,
    airingStarted: String,
    airingEnded: String,
    duration: String,
});

const DramaModel = mongoose.model('Drama', dramaSchema);
 
module.exports = DramaModel;