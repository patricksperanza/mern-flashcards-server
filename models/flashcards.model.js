const mongoose = require("mongoose")

const Schema = mongoose.Schema

const flashcardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

const Flashcard = mongoose.model("Flashcard", flashcardSchema)

module.exports = Flashcard
