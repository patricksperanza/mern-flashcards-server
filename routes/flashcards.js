const router = require("express").Router()
const Flashcard = require("../models/flashcards.model")

router.route("/").get((req, res) => {
  Flashcard.find()
    .then((flashcards) => res.json(flashcards))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/").post((req, res) => {
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
})

router.route("/:id").delete((req, res) => {
  Flashcard.findByIdAndDelete(req.params.id)
    .then(() => res.json("Card deleted"))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req, res) => {
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
})

module.exports = router
