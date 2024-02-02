import personService from '../services/persons.js';

function Persons({ persons, removePerson }) {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name}
          {' '}
          {person.number}
          {' '}
          <button className="deleteButton" onClick={() => removePerson(person)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default Persons;
