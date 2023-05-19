const Flashcard = require("../models/flashcards.model")
const mongoose = require("mongoose")

// get all flashcards
const getAllFlashcards = (req, res) => {
  Flashcard.find()
    .then((flashcards) => res.json(flashcards))
    .catch((err) => res.status(400).json("Error: " + err))
}

// create new flashcard
const createFlashcard = (req, res) => {
  const question = req.body.question
  const answer = req.body.answer

  const newFlashcard = new Flashcard({
    question,
    answer,
  })

  newFlashcard
    .save()
    .then(() => res.json("Flashcard added!"))
    .catch((err) => res.status(400).json("Error: " + err))
}

// Delete flashcard
const deleteFlashcard = (req, res) => {
  Flashcard.findByIdAndDelete(req.params.id)
    .then(() => res.json("Card deleted"))
    .catch((err) => res.status(400).json("Error: " + err))
}

// Update a flashcard
const updateFlashcard = (req, res) => {
  Flashcard.findById(req.params.id)
    .then((card) => {
      card.question = req.body.question
      card.answer = req.body.answer

      card
        .save()
        .then(() => res.json("Card updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
}

module.exports = {
  getAllFlashcards,
  createFlashcard,
  deleteFlashcard,
  updateFlashcard,
}
