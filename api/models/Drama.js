const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    year: Number,
    photos: [String],
    plot: String,
    profile: [String],
    extraInfo: String,
    episodes: Number,
    aired: Number,
    duration: Number,
});

const DramaModel = mongoose.model('Drama', dramaSchema);
 
module.exports = DramaModel;