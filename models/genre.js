const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
    name: { type: String, required: true, min: 3, max: 100 }
});

//Virtual for genre's url
GenreSchema.virtual('url').get(function () {
    return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);