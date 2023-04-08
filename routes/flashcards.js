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

  router.route("/:id").delete((req, res) => {
    Flashcard.findByIdAndDelete(req.params.id)
      .then(() => res.json("Card deleted"))
      .catch((err) => res.status(400).json("Error: " + err))
  })

  const newFlashcard = new Flashcard({
    question,
    answer,
  })

  newFlashcard
    .save()
    .then(() => res.json("Flashcard added!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
