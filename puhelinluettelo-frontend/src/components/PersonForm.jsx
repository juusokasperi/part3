const PersonForm = ({addPerson, newName, newNumber, setNewNumber, setNewName}) => {

    return (
    <form onSubmit={addPerson}>
    <div>
    Name: <input value={newName} onChange={({target}) => setNewName(target.value) } />
    </div>
    <div>
    Number: <input value={newNumber} onChange={({target}) => setNewNumber(target.value)} />
    </div>
    <div>
    <button type="submit">add</button>
    </div>
    </form>
    )
}
export default PersonForm