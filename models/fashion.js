console.log("hello")

const mongoose = require("mongoose")

const fashionSwipe = new mongoose.Schema({
    name: String,
    price: Number,
})

// must use a function (no arrow)

fashionSwipe.methods.sayHi = function () {
    console.log(`Hi, I'm a ${this.name}`)
}

module.exports = mongoose.model("fashion", fashionSwipe)