const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Person = require('./models/person');

const app = express();

// middleware
app.use(express.json());
app.use(express.static('dist'));

app.use(cors());
morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

// express routes
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world!</h1>');
// });

// const info = `<p>Phonebook has info for ${
//   persons.length
// } people</p><p>${new Date()}</p>`;

// app.get('/info', (req, res) => {
//   res.send(info);
// });

app.get('/api/persons', (req, res) => {
  Person.find({}).then((persons) => res.json(persons));
});

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then((person) => res.json(person));
});

// app.delete('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id);
//   persons = persons.filter((p) => p.id !== id);
//   res.status(204).end();
// });

// app.post('/api/persons', (req, res) => {
//   const body = req.body;
//   const id = Math.floor(Math.random() * 100);
//   const newPerson = {
//     name: body.name,
//     number: body.number,
//     id: id,
//   };

//   if (!body.name) {
//     return res.status(400).json({
//       error: 'name missing',
//     });
//   }

//   if (!body.number) {
//     return res.status(400).json({
//       error: 'number missing',
//     });
//   }

//   if (
//     persons.map((p) => p.name.toLowerCase()).includes(body.name.toLowerCase())
//   ) {
//     return res.status(400).json({
//       error: 'name must be unique',
//     });
//   }

//   persons = persons.concat(newPerson);
//   res.json(newPerson);
// });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
