const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    _id: { type: String, required: true },
    titre: { type: String, required: true },
    contenu: { type: String, required: true }
  }
)

// creation du model Appareil
module.exports = mongoose.model('post', postSchema)
