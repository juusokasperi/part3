function Filter({ filter, setFilter }) {
  return (
    <div>
      Filter shown with
      {' '}
      <input value={filter} onChange={({ target }) => setFilter(target.value)} />
    </div>
  );
}

export default Filter;
