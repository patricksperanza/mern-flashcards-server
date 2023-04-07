const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString, {
  useNewUrlParser: true,
})

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

const flashcardRouter = require("./routes/flashcards")

app.use("/flashcards", flashcardRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
