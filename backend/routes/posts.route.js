const express = require("express");
const router = express.Router();

const { post } = require("../models/post.model");

var ObjectId = require('mongoose').Types.ObjectId;

posts = [
  { _id: "g456", titre: "titre1", contenu: "texttexttexttext" },
  { _id: "r478", titre: "titre2", contenu: "texttexttexttext" },
  { _id: "b785", titre: "titre3", contenu: "texttexttexttext" },
  { _id: "t459", titre: "titre4", contenu: "texttexttexttext" },
];

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with the given id : ${req.params.id}`);

  post.findById(req.params.id, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retriving post ID :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/', (req, res) => {
  var pos = new post({
    _id: req.body._id,
    titre: req.body.titre,
    contenu: req.body.contenu,
  });
  pos.save((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in post Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with the given id : ${req.params.id}`);

  var pos = {
    _id: req.body._id,
    titre: req.body.titre,
    contenu: req.body.contenu,
  };

  pos.findByIdAndUpdate(req.params.id, { $set: pos }, { new: true }, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Updating post :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with the given id : ${req.params.id}`);

  pos.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Deleting post :' + JSON.stringify(err, undefined, 2)); }
  });
});


module.exports = router;
