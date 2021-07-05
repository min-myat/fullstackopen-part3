const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGO_URL;

console.log(`Connecting to ${url}`);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    unique: true,
    minLength: 8,
    required: true,
  },
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
