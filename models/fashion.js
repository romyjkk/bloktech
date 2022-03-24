console.log("hello")

const mongoose = require("mongoose")

const fashionSwipe = new mongoose.Schema({
    name: String,
    price: Number,
    new: Boolean
})

// must use a function (not arrow)

fashionSwipe.methods.sayHi = function () {
    console.log(`Hi, I'm a ${this.name}`)
}

fashionSwipe.statics.findByName = function (name) { //static level method
    return this.find({
        name: new RegExp(name, 'i')
    })
}

fashionSwipe.query.byName = function (name) { //query level method
    return this.where({
        name: new RegExp(name, 'i')
    })
}

// fashionSwipe.virtual('namedPrice').get(function () { //property that excists on an individual user
//     return `${this.name} <${this.price}>`
// })

// fashionSwipe.post("save", function (doc, next) {
//     doc.sayHi()
//     next()
// })

// use pre, post and next if you want something to occur before or after something and for it to then move on to the next

module.exports = mongoose.model("fashion", fashionSwipe)