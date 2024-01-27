const mongoose = require('mongoose')

if (process.argv.length <2 || !(process.argv.length === 3 || process.argv.length === 5)) {
  console.log('error, invalid number of arguments')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://juusor:${password}@cluster0.umtp8ku.mongodb.net/phoneBook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url).then(console.log('connected to db'))

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach( p => {
      console.log(`${p.name} ${p.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  const person = new Person({
    name: `${process.argv[3]}`,
    number: `${process.argv[4]}`,
  })
  
  person.save().then(result => {
    console.log(`Added ${person.name}, number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}