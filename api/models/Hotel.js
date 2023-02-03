import mongoose from "mongoose";

const {Schema} = mongoose;

const HotelSchema = new Schema({

    name: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true
    }
    ,
    city: {
        type: String,
        required: true
    }
    ,
    address: {
        type: String,
        required: true
    },
    //city center distance 
    distance: {
        type: String,
        required: true
    },
    photos: {
        ///most photo 
        type: [String],

    },
    description: {
        type: String,
        required: true
    },
    //hotel ratign
    rating: {
        type: Number,
        required: true,
        min: [0, '`{PATH}` Min 0 rating '],
        max: [5, '`{PATH}` Max 5 rating']
    },
    room: {
        type: [String],
        required: false
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: true
    }, title: {
        type: String,
        required: true
    }



});

export default mongoose.model ("Hotel" , HotelSchema)


