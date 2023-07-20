const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    drama: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Drama'},
    user: {type:mongoose.Schema.Types.ObjectId, required:true},
    watchingDate: {type:Date, required:true},
});

const ListingModel = mongoose.model('Listing', listingSchema);

module.exports = ListingModel;

