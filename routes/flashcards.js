const router = require("express").Router()
const Flashcard = require("../models/flashcards.model")

router.route("/").get((req, res) => {
  Flashcard.find()
    .then((flashcards) => res.json(flashcards))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/").post((req, res) => {
  console.log(req.body)
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

module.exports = router
