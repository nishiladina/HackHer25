const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, 
    password: String, 
    driver: { type: Boolean, default: false }, 
    rider: { type: Boolean, default: false },  

    driverInfo: {
        registration: String, 
        license: String,
        model: String,
        capacity: Number,
        currentRiders: Number,
        trip: {
            from: String,
            to: String,
            date: [Date],
            time: String //morning, afternoon, evening, or night
        }, 
        comments: String
    },

    riderInfo: {
        totalLuggage: Number,
        typeOfBaggage: String,
        trip: {
            from: String,
            to: String,
            dates: [Date],
            time: String //morning, afternoon, evening, or night
        }
    },
    comments: String
});

module.exports = mongoose.model("User", userSchema);

//after a ride is complete or if a ride is cancelled, fields need to be updated 
