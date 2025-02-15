const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, 
    driver: { type: Boolean, default: false }, 
    rider: { type: Boolean, default: false },  

    driverInfo: {
        registration: String,
        license: String,
        luggageCapacity: Number,
        model: String,
        capacity: Number,
        currentRiders: Number,
        trip: {
            from: String,
            to: String,
            date: [Date],
            time: String //morning, afternoon, evening, or night
        }
    },

    riderInfo: {
        totalLuggage: Number,
        sizeOfBaggage: String,
        trip: {
            from: String,
            to: String,
            dates: [Date],
            time: String //morning, afternoon, evening, or night
        }
    }
});

module.exports = mongoose.model("User", userSchema);
