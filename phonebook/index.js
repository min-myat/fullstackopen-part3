const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

const info = `<p>Phonebook has info for ${
  persons.length
} people</p><p>${new Date()}</p>`;

app.get('/info', (req, res) => {
  res.send(info);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
});

app.post('/api/persons', (req, res) => {
  const body = req.body;
  const id = Math.floor(Math.random() * 100);
  const newPerson = {
    name: body.name,
    number: body.number,
    id: id,
  };

  if (!body.name) {
    return res.status(400).json({
      error: 'name missing',
    });
  }

  if (!body.number) {
    return res.status(400).json({
      error: 'number missing',
    });
  }

  if (
    persons.map((p) => p.name.toLowerCase()).includes(body.name.toLowerCase())
  ) {
    return res.status(400).json({
      error: 'name must be unique',
    });
  }

  persons = persons.concat(newPerson);
  res.json(newPerson);
});

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
