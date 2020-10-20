const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const feedSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            default: '',
        },
        jam: {
            type: String,
            required: true,
            default: '',
        },
        menit: {
            type: String,
            required: true,
            default: '',
        },
    },
    { timestamps: true },
);
feedSchema.plugin(mongoosePaginate);
const Feeds = mongoose.model('feeds', feedSchema);
module.exports = Feeds;