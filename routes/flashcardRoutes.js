const router = require("express").Router()
const Flashcard = require("../models/flashcards.model")
const {
  getAllFlashcards,
  createFlashcard,
  deleteFlashcard,
  updateFlashcard,
} = require("../controllers/flashcardController")

// GET flashcards
router.get("/", getAllFlashcards)

// POST create new flashcard
router.post("/", createFlashcard)

// DELETE a flashcard
router.delete("/:id", deleteFlashcard)

// POST update a flashcard
router.post("/update/:id", updateFlashcard)

module.exports = router
