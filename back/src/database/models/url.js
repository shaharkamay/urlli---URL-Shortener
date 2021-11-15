export { Url };
import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
    shortUrlId: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    redirectCount: {
        type: Number,
        required: true,
    },
    creationDate: {
        type: Date,
        required: true,
    },
    lastClicked: {
        type: Date,
    }
})

const Url = mongoose.model('Url', UrlSchema);