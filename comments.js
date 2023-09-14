// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { Comment } = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET /comments
app.get('/comments', (req, res) => {
  Comment.findAll()
    .then((comments) => {
      res.status(200).send(comments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

// POST /comments
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  Comment.create({
    comment: comment,
  })
    .then(() => {
      res.status(201).send('Created');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

// PUT /comments
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { comment } = req.body;
  Comment.update(
    {
      comment: comment,
    },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.status(200).send('OK');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

// DELETE /comments
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  Comment.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(204).send('No Content');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});