const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, 
    password: String, 
    driver: { type: Boolean, default: false }, 
    rider: { type: Boolean, default: false },  

    driverInfo: {
        registration: String, 
        license: String, //should be boolean?
        model: String, //model of car
        luggageCapacity: Number, //max # of luggage in car or should we do per person?
        riderCapacity: Number, //max number of riders
        currentRiders: Number, //current # of riders
        trip: {
            from: String, //starting location
            to: String, //end location
            date: [Date], //should be an array of arrays to capture ranges more accurately ex: "I can do days 1-12 but cant do day 5"
            time: String //morning, afternoon, evening, or night
        }, 
        comments: String 
    },

    riderInfo: {
        totalLuggage: Number, //number of luggage user wants to bring
        typeOfBaggage: String, //size of luggage
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
